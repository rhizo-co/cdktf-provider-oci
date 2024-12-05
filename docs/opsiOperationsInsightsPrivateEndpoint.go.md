# `opsiOperationsInsightsPrivateEndpoint` Submodule <a name="`opsiOperationsInsightsPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiOperationsInsightsPrivateEndpoint <a name="OpsiOperationsInsightsPrivateEndpoint" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint oci_opsi_operations_insights_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightsprivateendpoint"

opsioperationsinsightsprivateendpoint.NewOpsiOperationsInsightsPrivateEndpoint(scope Construct, id *string, config OpsiOperationsInsightsPrivateEndpointConfig) OpsiOperationsInsightsPrivateEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig">OpsiOperationsInsightsPrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig">OpsiOperationsInsightsPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetPrivateEndpointStatusDetails">ResetPrivateEndpointStatusDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value OpsiOperationsInsightsPrivateEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts">OpsiOperationsInsightsPrivateEndpointTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetNsgIds"></a>

```go
func ResetNsgIds()
```

##### `ResetPrivateEndpointStatusDetails` <a name="ResetPrivateEndpointStatusDetails" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetPrivateEndpointStatusDetails"></a>

```go
func ResetPrivateEndpointStatusDetails()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiOperationsInsightsPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightsprivateendpoint"

opsioperationsinsightsprivateendpoint.OpsiOperationsInsightsPrivateEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightsprivateendpoint"

opsioperationsinsightsprivateendpoint.OpsiOperationsInsightsPrivateEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightsprivateendpoint"

opsioperationsinsightsprivateendpoint.OpsiOperationsInsightsPrivateEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightsprivateendpoint"

opsioperationsinsightsprivateendpoint.OpsiOperationsInsightsPrivateEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpsiOperationsInsightsPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpsiOperationsInsightsPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpsiOperationsInsightsPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpsiOperationsInsightsPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference">OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.isUsedForRacDbsInput">IsUsedForRacDbsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.privateEndpointStatusDetailsInput">PrivateEndpointStatusDetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.vcnIdInput">VcnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.isUsedForRacDbs">IsUsedForRacDbs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.privateEndpointStatusDetails">PrivateEndpointStatusDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.timeouts"></a>

```go
func Timeouts() OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference">OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsUsedForRacDbsInput`<sup>Optional</sup> <a name="IsUsedForRacDbsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.isUsedForRacDbsInput"></a>

```go
func IsUsedForRacDbsInput() interface{}
```

- *Type:* interface{}

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateEndpointStatusDetailsInput`<sup>Optional</sup> <a name="PrivateEndpointStatusDetailsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.privateEndpointStatusDetailsInput"></a>

```go
func PrivateEndpointStatusDetailsInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.vcnIdInput"></a>

```go
func VcnIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsUsedForRacDbs`<sup>Required</sup> <a name="IsUsedForRacDbs" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.isUsedForRacDbs"></a>

```go
func IsUsedForRacDbs() interface{}
```

- *Type:* interface{}

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateEndpointStatusDetails`<sup>Required</sup> <a name="PrivateEndpointStatusDetails" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.privateEndpointStatusDetails"></a>

```go
func PrivateEndpointStatusDetails() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiOperationsInsightsPrivateEndpointConfig <a name="OpsiOperationsInsightsPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightsprivateendpoint"

&opsioperationsinsightsprivateendpoint.OpsiOperationsInsightsPrivateEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	IsUsedForRacDbs: interface{},
	SubnetId: *string,
	VcnId: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	NsgIds: *[]*string,
	PrivateEndpointStatusDetails: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#compartment_id OpsiOperationsInsightsPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#display_name OpsiOperationsInsightsPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.isUsedForRacDbs">IsUsedForRacDbs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#is_used_for_rac_dbs OpsiOperationsInsightsPrivateEndpoint#is_used_for_rac_dbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#subnet_id OpsiOperationsInsightsPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.vcnId">VcnId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#vcn_id OpsiOperationsInsightsPrivateEndpoint#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#defined_tags OpsiOperationsInsightsPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#description OpsiOperationsInsightsPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#freeform_tags OpsiOperationsInsightsPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#id OpsiOperationsInsightsPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#nsg_ids OpsiOperationsInsightsPrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.privateEndpointStatusDetails">PrivateEndpointStatusDetails</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#private_endpoint_status_details OpsiOperationsInsightsPrivateEndpoint#private_endpoint_status_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts">OpsiOperationsInsightsPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#compartment_id OpsiOperationsInsightsPrivateEndpoint#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#display_name OpsiOperationsInsightsPrivateEndpoint#display_name}.

---

##### `IsUsedForRacDbs`<sup>Required</sup> <a name="IsUsedForRacDbs" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.isUsedForRacDbs"></a>

```go
IsUsedForRacDbs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#is_used_for_rac_dbs OpsiOperationsInsightsPrivateEndpoint#is_used_for_rac_dbs}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#subnet_id OpsiOperationsInsightsPrivateEndpoint#subnet_id}.

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.vcnId"></a>

```go
VcnId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#vcn_id OpsiOperationsInsightsPrivateEndpoint#vcn_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#defined_tags OpsiOperationsInsightsPrivateEndpoint#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#description OpsiOperationsInsightsPrivateEndpoint#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#freeform_tags OpsiOperationsInsightsPrivateEndpoint#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#id OpsiOperationsInsightsPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#nsg_ids OpsiOperationsInsightsPrivateEndpoint#nsg_ids}.

---

##### `PrivateEndpointStatusDetails`<sup>Optional</sup> <a name="PrivateEndpointStatusDetails" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.privateEndpointStatusDetails"></a>

```go
PrivateEndpointStatusDetails *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#private_endpoint_status_details OpsiOperationsInsightsPrivateEndpoint#private_endpoint_status_details}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointConfig.property.timeouts"></a>

```go
Timeouts OpsiOperationsInsightsPrivateEndpointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts">OpsiOperationsInsightsPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#timeouts OpsiOperationsInsightsPrivateEndpoint#timeouts}

---

### OpsiOperationsInsightsPrivateEndpointTimeouts <a name="OpsiOperationsInsightsPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightsprivateendpoint"

&opsioperationsinsightsprivateendpoint.OpsiOperationsInsightsPrivateEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#create OpsiOperationsInsightsPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#delete OpsiOperationsInsightsPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#update OpsiOperationsInsightsPrivateEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#create OpsiOperationsInsightsPrivateEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#delete OpsiOperationsInsightsPrivateEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_private_endpoint#update OpsiOperationsInsightsPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference <a name="OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightsprivateendpoint"

opsioperationsinsightsprivateendpoint.NewOpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsPrivateEndpoint.OpsiOperationsInsightsPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



