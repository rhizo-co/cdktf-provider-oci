# `vnMonitoringPathAnalysi` Submodule <a name="`vnMonitoringPathAnalysi` Submodule" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VnMonitoringPathAnalysi <a name="VnMonitoringPathAnalysi" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi oci_vn_monitoring_path_analysi}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

vnmonitoringpathanalysi.NewVnMonitoringPathAnalysi(scope Construct, id *string, config VnMonitoringPathAnalysiConfig) VnMonitoringPathAnalysi
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig">VnMonitoringPathAnalysiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig">VnMonitoringPathAnalysiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint">PutDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters">PutProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putQueryOptions">PutQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint">PutSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetDestinationEndpoint">ResetDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetPathAnalyzerTestId">ResetPathAnalyzerTestId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocolParameters">ResetProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetQueryOptions">ResetQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetSourceEndpoint">ResetSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationEndpoint` <a name="PutDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint"></a>

```go
func PutDestinationEndpoint(value VnMonitoringPathAnalysiDestinationEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

---

##### `PutProtocolParameters` <a name="PutProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters"></a>

```go
func PutProtocolParameters(value VnMonitoringPathAnalysiProtocolParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

---

##### `PutQueryOptions` <a name="PutQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putQueryOptions"></a>

```go
func PutQueryOptions(value VnMonitoringPathAnalysiQueryOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putQueryOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

---

##### `PutSourceEndpoint` <a name="PutSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint"></a>

```go
func PutSourceEndpoint(value VnMonitoringPathAnalysiSourceEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putTimeouts"></a>

```go
func PutTimeouts(value VnMonitoringPathAnalysiTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a>

---

##### `ResetCacheControl` <a name="ResetCacheControl" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCacheControl"></a>

```go
func ResetCacheControl()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDestinationEndpoint` <a name="ResetDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetDestinationEndpoint"></a>

```go
func ResetDestinationEndpoint()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetId"></a>

```go
func ResetId()
```

##### `ResetPathAnalyzerTestId` <a name="ResetPathAnalyzerTestId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetPathAnalyzerTestId"></a>

```go
func ResetPathAnalyzerTestId()
```

##### `ResetProtocol` <a name="ResetProtocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetProtocolParameters` <a name="ResetProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocolParameters"></a>

```go
func ResetProtocolParameters()
```

##### `ResetQueryOptions` <a name="ResetQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetQueryOptions"></a>

```go
func ResetQueryOptions()
```

##### `ResetSourceEndpoint` <a name="ResetSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetSourceEndpoint"></a>

```go
func ResetSourceEndpoint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VnMonitoringPathAnalysi resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

vnmonitoringpathanalysi.VnMonitoringPathAnalysi_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

vnmonitoringpathanalysi.VnMonitoringPathAnalysi_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

vnmonitoringpathanalysi.VnMonitoringPathAnalysi_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

vnmonitoringpathanalysi.VnMonitoringPathAnalysi_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VnMonitoringPathAnalysi resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VnMonitoringPathAnalysi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VnMonitoringPathAnalysi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VnMonitoringPathAnalysi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpoint">DestinationEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference">VnMonitoringPathAnalysiDestinationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParameters">ProtocolParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference">VnMonitoringPathAnalysiProtocolParametersOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptions">QueryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference">VnMonitoringPathAnalysiQueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpoint">SourceEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference">VnMonitoringPathAnalysiSourceEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference">VnMonitoringPathAnalysiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControlInput">CacheControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpointInput">DestinationEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestIdInput">PathAnalyzerTestIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolInput">ProtocolInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParametersInput">ProtocolParametersInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptionsInput">QueryOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpointInput">SourceEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControl">CacheControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestId">PathAnalyzerTestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocol">Protocol</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationEndpoint`<sup>Required</sup> <a name="DestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpoint"></a>

```go
func DestinationEndpoint() VnMonitoringPathAnalysiDestinationEndpointOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference">VnMonitoringPathAnalysiDestinationEndpointOutputReference</a>

---

##### `ProtocolParameters`<sup>Required</sup> <a name="ProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParameters"></a>

```go
func ProtocolParameters() VnMonitoringPathAnalysiProtocolParametersOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference">VnMonitoringPathAnalysiProtocolParametersOutputReference</a>

---

##### `QueryOptions`<sup>Required</sup> <a name="QueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptions"></a>

```go
func QueryOptions() VnMonitoringPathAnalysiQueryOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference">VnMonitoringPathAnalysiQueryOptionsOutputReference</a>

---

##### `SourceEndpoint`<sup>Required</sup> <a name="SourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpoint"></a>

```go
func SourceEndpoint() VnMonitoringPathAnalysiSourceEndpointOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference">VnMonitoringPathAnalysiSourceEndpointOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeouts"></a>

```go
func Timeouts() VnMonitoringPathAnalysiTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference">VnMonitoringPathAnalysiTimeoutsOutputReference</a>

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControlInput"></a>

```go
func CacheControlInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DestinationEndpointInput`<sup>Optional</sup> <a name="DestinationEndpointInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpointInput"></a>

```go
func DestinationEndpointInput() VnMonitoringPathAnalysiDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PathAnalyzerTestIdInput`<sup>Optional</sup> <a name="PathAnalyzerTestIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestIdInput"></a>

```go
func PathAnalyzerTestIdInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolInput"></a>

```go
func ProtocolInput() *f64
```

- *Type:* *f64

---

##### `ProtocolParametersInput`<sup>Optional</sup> <a name="ProtocolParametersInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParametersInput"></a>

```go
func ProtocolParametersInput() VnMonitoringPathAnalysiProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

---

##### `QueryOptionsInput`<sup>Optional</sup> <a name="QueryOptionsInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptionsInput"></a>

```go
func QueryOptionsInput() VnMonitoringPathAnalysiQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

---

##### `SourceEndpointInput`<sup>Optional</sup> <a name="SourceEndpointInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpointInput"></a>

```go
func SourceEndpointInput() VnMonitoringPathAnalysiSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControl"></a>

```go
func CacheControl() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PathAnalyzerTestId`<sup>Required</sup> <a name="PathAnalyzerTestId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestId"></a>

```go
func PathAnalyzerTestId() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocol"></a>

```go
func Protocol() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VnMonitoringPathAnalysiConfig <a name="VnMonitoringPathAnalysiConfig" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

&vnmonitoringpathanalysi.VnMonitoringPathAnalysiConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Type: *string,
	CacheControl: *string,
	CompartmentId: *string,
	DestinationEndpoint: github.com/rhizo-co/cdktf-provider-oci-go/oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint,
	Id: *string,
	PathAnalyzerTestId: *string,
	Protocol: *f64,
	ProtocolParameters: github.com/rhizo-co/cdktf-provider-oci-go/oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters,
	QueryOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions,
	SourceEndpoint: github.com/rhizo-co/cdktf-provider-oci-go/oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.cacheControl">CacheControl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#cache_control VnMonitoringPathAnalysi#cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#compartment_id VnMonitoringPathAnalysi#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.destinationEndpoint">DestinationEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a></code> | destination_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#id VnMonitoringPathAnalysi#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.pathAnalyzerTestId">PathAnalyzerTestId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#path_analyzer_test_id VnMonitoringPathAnalysi#path_analyzer_test_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocol">Protocol</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol VnMonitoringPathAnalysi#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocolParameters">ProtocolParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a></code> | protocol_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.queryOptions">QueryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a></code> | query_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.sourceEndpoint">SourceEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a></code> | source_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.cacheControl"></a>

```go
CacheControl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#cache_control VnMonitoringPathAnalysi#cache_control}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#compartment_id VnMonitoringPathAnalysi#compartment_id}.

---

##### `DestinationEndpoint`<sup>Optional</sup> <a name="DestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.destinationEndpoint"></a>

```go
DestinationEndpoint VnMonitoringPathAnalysiDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

destination_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#destination_endpoint VnMonitoringPathAnalysi#destination_endpoint}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#id VnMonitoringPathAnalysi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PathAnalyzerTestId`<sup>Optional</sup> <a name="PathAnalyzerTestId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.pathAnalyzerTestId"></a>

```go
PathAnalyzerTestId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#path_analyzer_test_id VnMonitoringPathAnalysi#path_analyzer_test_id}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocol"></a>

```go
Protocol *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol VnMonitoringPathAnalysi#protocol}.

---

##### `ProtocolParameters`<sup>Optional</sup> <a name="ProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocolParameters"></a>

```go
ProtocolParameters VnMonitoringPathAnalysiProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

protocol_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol_parameters VnMonitoringPathAnalysi#protocol_parameters}

---

##### `QueryOptions`<sup>Optional</sup> <a name="QueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.queryOptions"></a>

```go
QueryOptions VnMonitoringPathAnalysiQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#query_options VnMonitoringPathAnalysi#query_options}

---

##### `SourceEndpoint`<sup>Optional</sup> <a name="SourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.sourceEndpoint"></a>

```go
SourceEndpoint VnMonitoringPathAnalysiSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

source_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#source_endpoint VnMonitoringPathAnalysi#source_endpoint}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.timeouts"></a>

```go
Timeouts VnMonitoringPathAnalysiTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#timeouts VnMonitoringPathAnalysi#timeouts}

---

### VnMonitoringPathAnalysiDestinationEndpoint <a name="VnMonitoringPathAnalysiDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

&vnmonitoringpathanalysi.VnMonitoringPathAnalysiDestinationEndpoint {
	Type: *string,
	Address: *string,
	InstanceId: *string,
	ListenerId: *string,
	LoadBalancerId: *string,
	NetworkLoadBalancerId: *string,
	SubnetId: *string,
	VlanId: *string,
	VnicId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.listenerId">ListenerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vlanId">VlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vnicId">VnicId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}.

---

##### `ListenerId`<sup>Optional</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.listenerId"></a>

```go
ListenerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}.

---

##### `LoadBalancerId`<sup>Optional</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.loadBalancerId"></a>

```go
LoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}.

---

##### `NetworkLoadBalancerId`<sup>Optional</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.networkLoadBalancerId"></a>

```go
NetworkLoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}.

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vlanId"></a>

```go
VlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}.

---

##### `VnicId`<sup>Optional</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vnicId"></a>

```go
VnicId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}.

---

### VnMonitoringPathAnalysiProtocolParameters <a name="VnMonitoringPathAnalysiProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

&vnmonitoringpathanalysi.VnMonitoringPathAnalysiProtocolParameters {
	Type: *string,
	DestinationPort: *f64,
	IcmpCode: *f64,
	IcmpType: *f64,
	SourcePort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#destination_port VnMonitoringPathAnalysi#destination_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpCode">IcmpCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_code VnMonitoringPathAnalysi#icmp_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpType">IcmpType</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_type VnMonitoringPathAnalysi#icmp_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.sourcePort">SourcePort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#source_port VnMonitoringPathAnalysi#source_port}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `DestinationPort`<sup>Optional</sup> <a name="DestinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.destinationPort"></a>

```go
DestinationPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#destination_port VnMonitoringPathAnalysi#destination_port}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpCode"></a>

```go
IcmpCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_code VnMonitoringPathAnalysi#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpType"></a>

```go
IcmpType *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_type VnMonitoringPathAnalysi#icmp_type}.

---

##### `SourcePort`<sup>Optional</sup> <a name="SourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.sourcePort"></a>

```go
SourcePort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#source_port VnMonitoringPathAnalysi#source_port}.

---

### VnMonitoringPathAnalysiQueryOptions <a name="VnMonitoringPathAnalysiQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

&vnmonitoringpathanalysi.VnMonitoringPathAnalysiQueryOptions {
	IsBiDirectionalAnalysis: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions.property.isBiDirectionalAnalysis">IsBiDirectionalAnalysis</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#is_bi_directional_analysis VnMonitoringPathAnalysi#is_bi_directional_analysis}. |

---

##### `IsBiDirectionalAnalysis`<sup>Optional</sup> <a name="IsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions.property.isBiDirectionalAnalysis"></a>

```go
IsBiDirectionalAnalysis interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#is_bi_directional_analysis VnMonitoringPathAnalysi#is_bi_directional_analysis}.

---

### VnMonitoringPathAnalysiSourceEndpoint <a name="VnMonitoringPathAnalysiSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

&vnmonitoringpathanalysi.VnMonitoringPathAnalysiSourceEndpoint {
	Type: *string,
	Address: *string,
	InstanceId: *string,
	ListenerId: *string,
	LoadBalancerId: *string,
	NetworkLoadBalancerId: *string,
	SubnetId: *string,
	VlanId: *string,
	VnicId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.listenerId">ListenerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vlanId">VlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vnicId">VnicId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}.

---

##### `ListenerId`<sup>Optional</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.listenerId"></a>

```go
ListenerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}.

---

##### `LoadBalancerId`<sup>Optional</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.loadBalancerId"></a>

```go
LoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}.

---

##### `NetworkLoadBalancerId`<sup>Optional</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.networkLoadBalancerId"></a>

```go
NetworkLoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}.

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vlanId"></a>

```go
VlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}.

---

##### `VnicId`<sup>Optional</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vnicId"></a>

```go
VnicId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}.

---

### VnMonitoringPathAnalysiTimeouts <a name="VnMonitoringPathAnalysiTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

&vnmonitoringpathanalysi.VnMonitoringPathAnalysiTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#create VnMonitoringPathAnalysi#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#delete VnMonitoringPathAnalysi#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#update VnMonitoringPathAnalysi#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#create VnMonitoringPathAnalysi#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#delete VnMonitoringPathAnalysi#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#update VnMonitoringPathAnalysi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VnMonitoringPathAnalysiDestinationEndpointOutputReference <a name="VnMonitoringPathAnalysiDestinationEndpointOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

vnmonitoringpathanalysi.NewVnMonitoringPathAnalysiDestinationEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VnMonitoringPathAnalysiDestinationEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetListenerId">ResetListenerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetLoadBalancerId">ResetLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetNetworkLoadBalancerId">ResetNetworkLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVlanId">ResetVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVnicId">ResetVnicId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetListenerId` <a name="ResetListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetListenerId"></a>

```go
func ResetListenerId()
```

##### `ResetLoadBalancerId` <a name="ResetLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetLoadBalancerId"></a>

```go
func ResetLoadBalancerId()
```

##### `ResetNetworkLoadBalancerId` <a name="ResetNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetNetworkLoadBalancerId"></a>

```go
func ResetNetworkLoadBalancerId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetVlanId` <a name="ResetVlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVlanId"></a>

```go
func ResetVlanId()
```

##### `ResetVnicId` <a name="ResetVnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVnicId"></a>

```go
func ResetVnicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerIdInput">ListenerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicIdInput">VnicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerId">ListenerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicId">VnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `ListenerIdInput`<sup>Optional</sup> <a name="ListenerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerIdInput"></a>

```go
func ListenerIdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerIdInput"></a>

```go
func LoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerIdInput"></a>

```go
func NetworkLoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanIdInput"></a>

```go
func VlanIdInput() *string
```

- *Type:* *string

---

##### `VnicIdInput`<sup>Optional</sup> <a name="VnicIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicIdInput"></a>

```go
func VnicIdInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerId"></a>

```go
func ListenerId() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerId"></a>

```go
func NetworkLoadBalancerId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicId"></a>

```go
func VnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() VnMonitoringPathAnalysiDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

---


### VnMonitoringPathAnalysiProtocolParametersOutputReference <a name="VnMonitoringPathAnalysiProtocolParametersOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

vnmonitoringpathanalysi.NewVnMonitoringPathAnalysiProtocolParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VnMonitoringPathAnalysiProtocolParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetDestinationPort">ResetDestinationPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetSourcePort">ResetSourcePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPort` <a name="ResetDestinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetDestinationPort"></a>

```go
func ResetDestinationPort()
```

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpCode"></a>

```go
func ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpType"></a>

```go
func ResetIcmpType()
```

##### `ResetSourcePort` <a name="ResetSourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetSourcePort"></a>

```go
func ResetSourcePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPortInput">DestinationPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePortInput">SourcePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCode">IcmpCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpType">IcmpType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePort">SourcePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPortInput`<sup>Optional</sup> <a name="DestinationPortInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPortInput"></a>

```go
func DestinationPortInput() *f64
```

- *Type:* *f64

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCodeInput"></a>

```go
func IcmpCodeInput() *f64
```

- *Type:* *f64

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpTypeInput"></a>

```go
func IcmpTypeInput() *f64
```

- *Type:* *f64

---

##### `SourcePortInput`<sup>Optional</sup> <a name="SourcePortInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePortInput"></a>

```go
func SourcePortInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPort"></a>

```go
func DestinationPort() *f64
```

- *Type:* *f64

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCode"></a>

```go
func IcmpCode() *f64
```

- *Type:* *f64

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpType"></a>

```go
func IcmpType() *f64
```

- *Type:* *f64

---

##### `SourcePort`<sup>Required</sup> <a name="SourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePort"></a>

```go
func SourcePort() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() VnMonitoringPathAnalysiProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

---


### VnMonitoringPathAnalysiQueryOptionsOutputReference <a name="VnMonitoringPathAnalysiQueryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

vnmonitoringpathanalysi.NewVnMonitoringPathAnalysiQueryOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VnMonitoringPathAnalysiQueryOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resetIsBiDirectionalAnalysis">ResetIsBiDirectionalAnalysis</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsBiDirectionalAnalysis` <a name="ResetIsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resetIsBiDirectionalAnalysis"></a>

```go
func ResetIsBiDirectionalAnalysis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysisInput">IsBiDirectionalAnalysisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysis">IsBiDirectionalAnalysis</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsBiDirectionalAnalysisInput`<sup>Optional</sup> <a name="IsBiDirectionalAnalysisInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysisInput"></a>

```go
func IsBiDirectionalAnalysisInput() interface{}
```

- *Type:* interface{}

---

##### `IsBiDirectionalAnalysis`<sup>Required</sup> <a name="IsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysis"></a>

```go
func IsBiDirectionalAnalysis() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VnMonitoringPathAnalysiQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

---


### VnMonitoringPathAnalysiSourceEndpointOutputReference <a name="VnMonitoringPathAnalysiSourceEndpointOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

vnmonitoringpathanalysi.NewVnMonitoringPathAnalysiSourceEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VnMonitoringPathAnalysiSourceEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetListenerId">ResetListenerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetLoadBalancerId">ResetLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetNetworkLoadBalancerId">ResetNetworkLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVlanId">ResetVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVnicId">ResetVnicId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetListenerId` <a name="ResetListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetListenerId"></a>

```go
func ResetListenerId()
```

##### `ResetLoadBalancerId` <a name="ResetLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetLoadBalancerId"></a>

```go
func ResetLoadBalancerId()
```

##### `ResetNetworkLoadBalancerId` <a name="ResetNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetNetworkLoadBalancerId"></a>

```go
func ResetNetworkLoadBalancerId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetVlanId` <a name="ResetVlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVlanId"></a>

```go
func ResetVlanId()
```

##### `ResetVnicId` <a name="ResetVnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVnicId"></a>

```go
func ResetVnicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerIdInput">ListenerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicIdInput">VnicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerId">ListenerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicId">VnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `ListenerIdInput`<sup>Optional</sup> <a name="ListenerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerIdInput"></a>

```go
func ListenerIdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerIdInput"></a>

```go
func LoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerIdInput"></a>

```go
func NetworkLoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanIdInput"></a>

```go
func VlanIdInput() *string
```

- *Type:* *string

---

##### `VnicIdInput`<sup>Optional</sup> <a name="VnicIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicIdInput"></a>

```go
func VnicIdInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerId"></a>

```go
func ListenerId() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerId"></a>

```go
func NetworkLoadBalancerId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicId"></a>

```go
func VnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() VnMonitoringPathAnalysiSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

---


### VnMonitoringPathAnalysiTimeoutsOutputReference <a name="VnMonitoringPathAnalysiTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalysi"

vnmonitoringpathanalysi.NewVnMonitoringPathAnalysiTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VnMonitoringPathAnalysiTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



