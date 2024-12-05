# `vnMonitoringPathAnalyzerTest` Submodule <a name="`vnMonitoringPathAnalyzerTest` Submodule" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VnMonitoringPathAnalyzerTest <a name="VnMonitoringPathAnalyzerTest" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test oci_vn_monitoring_path_analyzer_test}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

vnmonitoringpathanalyzertest.NewVnMonitoringPathAnalyzerTest(scope Construct, id *string, config VnMonitoringPathAnalyzerTestConfig) VnMonitoringPathAnalyzerTest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig">VnMonitoringPathAnalyzerTestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig">VnMonitoringPathAnalyzerTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint">PutDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putProtocolParameters">PutProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putQueryOptions">PutQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint">PutSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetProtocolParameters">ResetProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetQueryOptions">ResetQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationEndpoint` <a name="PutDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint"></a>

```go
func PutDestinationEndpoint(value VnMonitoringPathAnalyzerTestDestinationEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a>

---

##### `PutProtocolParameters` <a name="PutProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putProtocolParameters"></a>

```go
func PutProtocolParameters(value VnMonitoringPathAnalyzerTestProtocolParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putProtocolParameters.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a>

---

##### `PutQueryOptions` <a name="PutQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putQueryOptions"></a>

```go
func PutQueryOptions(value VnMonitoringPathAnalyzerTestQueryOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putQueryOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a>

---

##### `PutSourceEndpoint` <a name="PutSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint"></a>

```go
func PutSourceEndpoint(value VnMonitoringPathAnalyzerTestSourceEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putTimeouts"></a>

```go
func PutTimeouts(value VnMonitoringPathAnalyzerTestTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts">VnMonitoringPathAnalyzerTestTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetId"></a>

```go
func ResetId()
```

##### `ResetProtocolParameters` <a name="ResetProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetProtocolParameters"></a>

```go
func ResetProtocolParameters()
```

##### `ResetQueryOptions` <a name="ResetQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetQueryOptions"></a>

```go
func ResetQueryOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VnMonitoringPathAnalyzerTest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

vnmonitoringpathanalyzertest.VnMonitoringPathAnalyzerTest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

vnmonitoringpathanalyzertest.VnMonitoringPathAnalyzerTest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

vnmonitoringpathanalyzertest.VnMonitoringPathAnalyzerTest_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

vnmonitoringpathanalyzertest.VnMonitoringPathAnalyzerTest_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VnMonitoringPathAnalyzerTest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VnMonitoringPathAnalyzerTest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VnMonitoringPathAnalyzerTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VnMonitoringPathAnalyzerTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.destinationEndpoint">DestinationEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference">VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolParameters">ProtocolParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference">VnMonitoringPathAnalyzerTestProtocolParametersOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.queryOptions">QueryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference">VnMonitoringPathAnalyzerTestQueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.sourceEndpoint">SourceEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference">VnMonitoringPathAnalyzerTestSourceEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference">VnMonitoringPathAnalyzerTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.destinationEndpointInput">DestinationEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolInput">ProtocolInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolParametersInput">ProtocolParametersInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.queryOptionsInput">QueryOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.sourceEndpointInput">SourceEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocol">Protocol</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationEndpoint`<sup>Required</sup> <a name="DestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.destinationEndpoint"></a>

```go
func DestinationEndpoint() VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference">VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference</a>

---

##### `ProtocolParameters`<sup>Required</sup> <a name="ProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolParameters"></a>

```go
func ProtocolParameters() VnMonitoringPathAnalyzerTestProtocolParametersOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference">VnMonitoringPathAnalyzerTestProtocolParametersOutputReference</a>

---

##### `QueryOptions`<sup>Required</sup> <a name="QueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.queryOptions"></a>

```go
func QueryOptions() VnMonitoringPathAnalyzerTestQueryOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference">VnMonitoringPathAnalyzerTestQueryOptionsOutputReference</a>

---

##### `SourceEndpoint`<sup>Required</sup> <a name="SourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.sourceEndpoint"></a>

```go
func SourceEndpoint() VnMonitoringPathAnalyzerTestSourceEndpointOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference">VnMonitoringPathAnalyzerTestSourceEndpointOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeouts"></a>

```go
func Timeouts() VnMonitoringPathAnalyzerTestTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference">VnMonitoringPathAnalyzerTestTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DestinationEndpointInput`<sup>Optional</sup> <a name="DestinationEndpointInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.destinationEndpointInput"></a>

```go
func DestinationEndpointInput() VnMonitoringPathAnalyzerTestDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolInput"></a>

```go
func ProtocolInput() *f64
```

- *Type:* *f64

---

##### `ProtocolParametersInput`<sup>Optional</sup> <a name="ProtocolParametersInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolParametersInput"></a>

```go
func ProtocolParametersInput() VnMonitoringPathAnalyzerTestProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a>

---

##### `QueryOptionsInput`<sup>Optional</sup> <a name="QueryOptionsInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.queryOptionsInput"></a>

```go
func QueryOptionsInput() VnMonitoringPathAnalyzerTestQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a>

---

##### `SourceEndpointInput`<sup>Optional</sup> <a name="SourceEndpointInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.sourceEndpointInput"></a>

```go
func SourceEndpointInput() VnMonitoringPathAnalyzerTestSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocol"></a>

```go
func Protocol() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VnMonitoringPathAnalyzerTestConfig <a name="VnMonitoringPathAnalyzerTestConfig" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

&vnmonitoringpathanalyzertest.VnMonitoringPathAnalyzerTestConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DestinationEndpoint: github.com/rhizo-co/cdktf-provider-oci-go/oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint,
	Protocol: *f64,
	SourceEndpoint: github.com/rhizo-co/cdktf-provider-oci-go/oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	ProtocolParameters: github.com/rhizo-co/cdktf-provider-oci-go/oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters,
	QueryOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#compartment_id VnMonitoringPathAnalyzerTest#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.destinationEndpoint">DestinationEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a></code> | destination_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.protocol">Protocol</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#protocol VnMonitoringPathAnalyzerTest#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.sourceEndpoint">SourceEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a></code> | source_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#defined_tags VnMonitoringPathAnalyzerTest#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#display_name VnMonitoringPathAnalyzerTest#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#freeform_tags VnMonitoringPathAnalyzerTest#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#id VnMonitoringPathAnalyzerTest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.protocolParameters">ProtocolParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a></code> | protocol_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.queryOptions">QueryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a></code> | query_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts">VnMonitoringPathAnalyzerTestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#compartment_id VnMonitoringPathAnalyzerTest#compartment_id}.

---

##### `DestinationEndpoint`<sup>Required</sup> <a name="DestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.destinationEndpoint"></a>

```go
DestinationEndpoint VnMonitoringPathAnalyzerTestDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a>

destination_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#destination_endpoint VnMonitoringPathAnalyzerTest#destination_endpoint}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.protocol"></a>

```go
Protocol *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#protocol VnMonitoringPathAnalyzerTest#protocol}.

---

##### `SourceEndpoint`<sup>Required</sup> <a name="SourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.sourceEndpoint"></a>

```go
SourceEndpoint VnMonitoringPathAnalyzerTestSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a>

source_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#source_endpoint VnMonitoringPathAnalyzerTest#source_endpoint}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#defined_tags VnMonitoringPathAnalyzerTest#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#display_name VnMonitoringPathAnalyzerTest#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#freeform_tags VnMonitoringPathAnalyzerTest#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#id VnMonitoringPathAnalyzerTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProtocolParameters`<sup>Optional</sup> <a name="ProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.protocolParameters"></a>

```go
ProtocolParameters VnMonitoringPathAnalyzerTestProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a>

protocol_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#protocol_parameters VnMonitoringPathAnalyzerTest#protocol_parameters}

---

##### `QueryOptions`<sup>Optional</sup> <a name="QueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.queryOptions"></a>

```go
QueryOptions VnMonitoringPathAnalyzerTestQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#query_options VnMonitoringPathAnalyzerTest#query_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.timeouts"></a>

```go
Timeouts VnMonitoringPathAnalyzerTestTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts">VnMonitoringPathAnalyzerTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#timeouts VnMonitoringPathAnalyzerTest#timeouts}

---

### VnMonitoringPathAnalyzerTestDestinationEndpoint <a name="VnMonitoringPathAnalyzerTestDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

&vnmonitoringpathanalyzertest.VnMonitoringPathAnalyzerTestDestinationEndpoint {
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
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#address VnMonitoringPathAnalyzerTest#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#instance_id VnMonitoringPathAnalyzerTest#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.listenerId">ListenerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#listener_id VnMonitoringPathAnalyzerTest#listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#load_balancer_id VnMonitoringPathAnalyzerTest#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#network_load_balancer_id VnMonitoringPathAnalyzerTest#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#subnet_id VnMonitoringPathAnalyzerTest#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.vlanId">VlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vlan_id VnMonitoringPathAnalyzerTest#vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.vnicId">VnicId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vnic_id VnMonitoringPathAnalyzerTest#vnic_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#address VnMonitoringPathAnalyzerTest#address}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#instance_id VnMonitoringPathAnalyzerTest#instance_id}.

---

##### `ListenerId`<sup>Optional</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.listenerId"></a>

```go
ListenerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#listener_id VnMonitoringPathAnalyzerTest#listener_id}.

---

##### `LoadBalancerId`<sup>Optional</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.loadBalancerId"></a>

```go
LoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#load_balancer_id VnMonitoringPathAnalyzerTest#load_balancer_id}.

---

##### `NetworkLoadBalancerId`<sup>Optional</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.networkLoadBalancerId"></a>

```go
NetworkLoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#network_load_balancer_id VnMonitoringPathAnalyzerTest#network_load_balancer_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#subnet_id VnMonitoringPathAnalyzerTest#subnet_id}.

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.vlanId"></a>

```go
VlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vlan_id VnMonitoringPathAnalyzerTest#vlan_id}.

---

##### `VnicId`<sup>Optional</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.vnicId"></a>

```go
VnicId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vnic_id VnMonitoringPathAnalyzerTest#vnic_id}.

---

### VnMonitoringPathAnalyzerTestProtocolParameters <a name="VnMonitoringPathAnalyzerTestProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

&vnmonitoringpathanalyzertest.VnMonitoringPathAnalyzerTestProtocolParameters {
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
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#destination_port VnMonitoringPathAnalyzerTest#destination_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.icmpCode">IcmpCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#icmp_code VnMonitoringPathAnalyzerTest#icmp_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.icmpType">IcmpType</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#icmp_type VnMonitoringPathAnalyzerTest#icmp_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.sourcePort">SourcePort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#source_port VnMonitoringPathAnalyzerTest#source_port}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}.

---

##### `DestinationPort`<sup>Optional</sup> <a name="DestinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.destinationPort"></a>

```go
DestinationPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#destination_port VnMonitoringPathAnalyzerTest#destination_port}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.icmpCode"></a>

```go
IcmpCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#icmp_code VnMonitoringPathAnalyzerTest#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.icmpType"></a>

```go
IcmpType *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#icmp_type VnMonitoringPathAnalyzerTest#icmp_type}.

---

##### `SourcePort`<sup>Optional</sup> <a name="SourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.sourcePort"></a>

```go
SourcePort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#source_port VnMonitoringPathAnalyzerTest#source_port}.

---

### VnMonitoringPathAnalyzerTestQueryOptions <a name="VnMonitoringPathAnalyzerTestQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

&vnmonitoringpathanalyzertest.VnMonitoringPathAnalyzerTestQueryOptions {
	IsBiDirectionalAnalysis: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions.property.isBiDirectionalAnalysis">IsBiDirectionalAnalysis</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#is_bi_directional_analysis VnMonitoringPathAnalyzerTest#is_bi_directional_analysis}. |

---

##### `IsBiDirectionalAnalysis`<sup>Optional</sup> <a name="IsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions.property.isBiDirectionalAnalysis"></a>

```go
IsBiDirectionalAnalysis interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#is_bi_directional_analysis VnMonitoringPathAnalyzerTest#is_bi_directional_analysis}.

---

### VnMonitoringPathAnalyzerTestSourceEndpoint <a name="VnMonitoringPathAnalyzerTestSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

&vnmonitoringpathanalyzertest.VnMonitoringPathAnalyzerTestSourceEndpoint {
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
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#address VnMonitoringPathAnalyzerTest#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#instance_id VnMonitoringPathAnalyzerTest#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.listenerId">ListenerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#listener_id VnMonitoringPathAnalyzerTest#listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#load_balancer_id VnMonitoringPathAnalyzerTest#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#network_load_balancer_id VnMonitoringPathAnalyzerTest#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#subnet_id VnMonitoringPathAnalyzerTest#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.vlanId">VlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vlan_id VnMonitoringPathAnalyzerTest#vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.vnicId">VnicId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vnic_id VnMonitoringPathAnalyzerTest#vnic_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#address VnMonitoringPathAnalyzerTest#address}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#instance_id VnMonitoringPathAnalyzerTest#instance_id}.

---

##### `ListenerId`<sup>Optional</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.listenerId"></a>

```go
ListenerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#listener_id VnMonitoringPathAnalyzerTest#listener_id}.

---

##### `LoadBalancerId`<sup>Optional</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.loadBalancerId"></a>

```go
LoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#load_balancer_id VnMonitoringPathAnalyzerTest#load_balancer_id}.

---

##### `NetworkLoadBalancerId`<sup>Optional</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.networkLoadBalancerId"></a>

```go
NetworkLoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#network_load_balancer_id VnMonitoringPathAnalyzerTest#network_load_balancer_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#subnet_id VnMonitoringPathAnalyzerTest#subnet_id}.

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.vlanId"></a>

```go
VlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vlan_id VnMonitoringPathAnalyzerTest#vlan_id}.

---

##### `VnicId`<sup>Optional</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.vnicId"></a>

```go
VnicId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vnic_id VnMonitoringPathAnalyzerTest#vnic_id}.

---

### VnMonitoringPathAnalyzerTestTimeouts <a name="VnMonitoringPathAnalyzerTestTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

&vnmonitoringpathanalyzertest.VnMonitoringPathAnalyzerTestTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#create VnMonitoringPathAnalyzerTest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#delete VnMonitoringPathAnalyzerTest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#update VnMonitoringPathAnalyzerTest#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#create VnMonitoringPathAnalyzerTest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#delete VnMonitoringPathAnalyzerTest#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#update VnMonitoringPathAnalyzerTest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference <a name="VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

vnmonitoringpathanalyzertest.NewVnMonitoringPathAnalyzerTestDestinationEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetListenerId">ResetListenerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetLoadBalancerId">ResetLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetNetworkLoadBalancerId">ResetNetworkLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetVlanId">ResetVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetVnicId">ResetVnicId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetListenerId` <a name="ResetListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetListenerId"></a>

```go
func ResetListenerId()
```

##### `ResetLoadBalancerId` <a name="ResetLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetLoadBalancerId"></a>

```go
func ResetLoadBalancerId()
```

##### `ResetNetworkLoadBalancerId` <a name="ResetNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetNetworkLoadBalancerId"></a>

```go
func ResetNetworkLoadBalancerId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetVlanId` <a name="ResetVlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetVlanId"></a>

```go
func ResetVlanId()
```

##### `ResetVnicId` <a name="ResetVnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetVnicId"></a>

```go
func ResetVnicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerIdInput">ListenerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicIdInput">VnicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerId">ListenerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicId">VnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `ListenerIdInput`<sup>Optional</sup> <a name="ListenerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerIdInput"></a>

```go
func ListenerIdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerIdInput"></a>

```go
func LoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerIdInput"></a>

```go
func NetworkLoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanIdInput"></a>

```go
func VlanIdInput() *string
```

- *Type:* *string

---

##### `VnicIdInput`<sup>Optional</sup> <a name="VnicIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicIdInput"></a>

```go
func VnicIdInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerId"></a>

```go
func ListenerId() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerId"></a>

```go
func NetworkLoadBalancerId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicId"></a>

```go
func VnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() VnMonitoringPathAnalyzerTestDestinationEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a>

---


### VnMonitoringPathAnalyzerTestProtocolParametersOutputReference <a name="VnMonitoringPathAnalyzerTestProtocolParametersOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

vnmonitoringpathanalyzertest.NewVnMonitoringPathAnalyzerTestProtocolParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VnMonitoringPathAnalyzerTestProtocolParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetDestinationPort">ResetDestinationPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetSourcePort">ResetSourcePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPort` <a name="ResetDestinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetDestinationPort"></a>

```go
func ResetDestinationPort()
```

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetIcmpCode"></a>

```go
func ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetIcmpType"></a>

```go
func ResetIcmpType()
```

##### `ResetSourcePort` <a name="ResetSourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetSourcePort"></a>

```go
func ResetSourcePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPortInput">DestinationPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePortInput">SourcePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCode">IcmpCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpType">IcmpType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePort">SourcePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPortInput`<sup>Optional</sup> <a name="DestinationPortInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPortInput"></a>

```go
func DestinationPortInput() *f64
```

- *Type:* *f64

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCodeInput"></a>

```go
func IcmpCodeInput() *f64
```

- *Type:* *f64

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpTypeInput"></a>

```go
func IcmpTypeInput() *f64
```

- *Type:* *f64

---

##### `SourcePortInput`<sup>Optional</sup> <a name="SourcePortInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePortInput"></a>

```go
func SourcePortInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPort"></a>

```go
func DestinationPort() *f64
```

- *Type:* *f64

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCode"></a>

```go
func IcmpCode() *f64
```

- *Type:* *f64

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpType"></a>

```go
func IcmpType() *f64
```

- *Type:* *f64

---

##### `SourcePort`<sup>Required</sup> <a name="SourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePort"></a>

```go
func SourcePort() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() VnMonitoringPathAnalyzerTestProtocolParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a>

---


### VnMonitoringPathAnalyzerTestQueryOptionsOutputReference <a name="VnMonitoringPathAnalyzerTestQueryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

vnmonitoringpathanalyzertest.NewVnMonitoringPathAnalyzerTestQueryOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VnMonitoringPathAnalyzerTestQueryOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resetIsBiDirectionalAnalysis">ResetIsBiDirectionalAnalysis</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsBiDirectionalAnalysis` <a name="ResetIsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resetIsBiDirectionalAnalysis"></a>

```go
func ResetIsBiDirectionalAnalysis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysisInput">IsBiDirectionalAnalysisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysis">IsBiDirectionalAnalysis</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsBiDirectionalAnalysisInput`<sup>Optional</sup> <a name="IsBiDirectionalAnalysisInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysisInput"></a>

```go
func IsBiDirectionalAnalysisInput() interface{}
```

- *Type:* interface{}

---

##### `IsBiDirectionalAnalysis`<sup>Required</sup> <a name="IsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysis"></a>

```go
func IsBiDirectionalAnalysis() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VnMonitoringPathAnalyzerTestQueryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a>

---


### VnMonitoringPathAnalyzerTestSourceEndpointOutputReference <a name="VnMonitoringPathAnalyzerTestSourceEndpointOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

vnmonitoringpathanalyzertest.NewVnMonitoringPathAnalyzerTestSourceEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VnMonitoringPathAnalyzerTestSourceEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetListenerId">ResetListenerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetLoadBalancerId">ResetLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetNetworkLoadBalancerId">ResetNetworkLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetVlanId">ResetVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetVnicId">ResetVnicId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetListenerId` <a name="ResetListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetListenerId"></a>

```go
func ResetListenerId()
```

##### `ResetLoadBalancerId` <a name="ResetLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetLoadBalancerId"></a>

```go
func ResetLoadBalancerId()
```

##### `ResetNetworkLoadBalancerId` <a name="ResetNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetNetworkLoadBalancerId"></a>

```go
func ResetNetworkLoadBalancerId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetVlanId` <a name="ResetVlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetVlanId"></a>

```go
func ResetVlanId()
```

##### `ResetVnicId` <a name="ResetVnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetVnicId"></a>

```go
func ResetVnicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerIdInput">ListenerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicIdInput">VnicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerId">ListenerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicId">VnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `ListenerIdInput`<sup>Optional</sup> <a name="ListenerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerIdInput"></a>

```go
func ListenerIdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerIdInput"></a>

```go
func LoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerIdInput"></a>

```go
func NetworkLoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanIdInput"></a>

```go
func VlanIdInput() *string
```

- *Type:* *string

---

##### `VnicIdInput`<sup>Optional</sup> <a name="VnicIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicIdInput"></a>

```go
func VnicIdInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerId"></a>

```go
func ListenerId() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerId"></a>

```go
func NetworkLoadBalancerId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicId"></a>

```go
func VnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() VnMonitoringPathAnalyzerTestSourceEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a>

---


### VnMonitoringPathAnalyzerTestTimeoutsOutputReference <a name="VnMonitoringPathAnalyzerTestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vnmonitoringpathanalyzertest"

vnmonitoringpathanalyzertest.NewVnMonitoringPathAnalyzerTestTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VnMonitoringPathAnalyzerTestTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



