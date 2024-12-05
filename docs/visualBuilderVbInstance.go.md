# `visualBuilderVbInstance` Submodule <a name="`visualBuilderVbInstance` Submodule" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VisualBuilderVbInstance <a name="VisualBuilderVbInstance" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance oci_visual_builder_vb_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

visualbuildervbinstance.NewVisualBuilderVbInstance(scope Construct, id *string, config VisualBuilderVbInstanceConfig) VisualBuilderVbInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig">VisualBuilderVbInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig">VisualBuilderVbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putAlternateCustomEndpoints">PutAlternateCustomEndpoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putCustomEndpoint">PutCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetAlternateCustomEndpoints">ResetAlternateCustomEndpoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetConsumptionModel">ResetConsumptionModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetCustomEndpoint">ResetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetIdcsOpenId">ResetIdcsOpenId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetIsVisualBuilderEnabled">ResetIsVisualBuilderEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlternateCustomEndpoints` <a name="PutAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putAlternateCustomEndpoints"></a>

```go
func PutAlternateCustomEndpoints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putAlternateCustomEndpoints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCustomEndpoint` <a name="PutCustomEndpoint" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putCustomEndpoint"></a>

```go
func PutCustomEndpoint(value VisualBuilderVbInstanceCustomEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putCustomEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putTimeouts"></a>

```go
func PutTimeouts(value VisualBuilderVbInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts">VisualBuilderVbInstanceTimeouts</a>

---

##### `ResetAlternateCustomEndpoints` <a name="ResetAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetAlternateCustomEndpoints"></a>

```go
func ResetAlternateCustomEndpoints()
```

##### `ResetConsumptionModel` <a name="ResetConsumptionModel" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetConsumptionModel"></a>

```go
func ResetConsumptionModel()
```

##### `ResetCustomEndpoint` <a name="ResetCustomEndpoint" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetCustomEndpoint"></a>

```go
func ResetCustomEndpoint()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetIdcsOpenId` <a name="ResetIdcsOpenId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetIdcsOpenId"></a>

```go
func ResetIdcsOpenId()
```

##### `ResetIsVisualBuilderEnabled` <a name="ResetIsVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetIsVisualBuilderEnabled"></a>

```go
func ResetIsVisualBuilderEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VisualBuilderVbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

visualbuildervbinstance.VisualBuilderVbInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

visualbuildervbinstance.VisualBuilderVbInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

visualbuildervbinstance.VisualBuilderVbInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

visualbuildervbinstance.VisualBuilderVbInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VisualBuilderVbInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VisualBuilderVbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VisualBuilderVbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VisualBuilderVbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.alternateCustomEndpoints">AlternateCustomEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList">VisualBuilderVbInstanceAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.attachments">Attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList">VisualBuilderVbInstanceAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.customEndpoint">CustomEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference">VisualBuilderVbInstanceCustomEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idcsInfo">IdcsInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList">VisualBuilderVbInstanceIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.instanceUrl">InstanceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.managementNatGatewayIp">ManagementNatGatewayIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.managementVcnId">ManagementVcnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.serviceNatGatewayIp">ServiceNatGatewayIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.serviceVcnId">ServiceVcnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference">VisualBuilderVbInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.alternateCustomEndpointsInput">AlternateCustomEndpointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.consumptionModelInput">ConsumptionModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.customEndpointInput">CustomEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idcsOpenIdInput">IdcsOpenIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.isVisualBuilderEnabledInput">IsVisualBuilderEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.consumptionModel">ConsumptionModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idcsOpenId">IdcsOpenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.isVisualBuilderEnabled">IsVisualBuilderEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlternateCustomEndpoints`<sup>Required</sup> <a name="AlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.alternateCustomEndpoints"></a>

```go
func AlternateCustomEndpoints() VisualBuilderVbInstanceAlternateCustomEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList">VisualBuilderVbInstanceAlternateCustomEndpointsList</a>

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.attachments"></a>

```go
func Attachments() VisualBuilderVbInstanceAttachmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList">VisualBuilderVbInstanceAttachmentsList</a>

---

##### `CustomEndpoint`<sup>Required</sup> <a name="CustomEndpoint" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.customEndpoint"></a>

```go
func CustomEndpoint() VisualBuilderVbInstanceCustomEndpointOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference">VisualBuilderVbInstanceCustomEndpointOutputReference</a>

---

##### `IdcsInfo`<sup>Required</sup> <a name="IdcsInfo" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idcsInfo"></a>

```go
func IdcsInfo() VisualBuilderVbInstanceIdcsInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList">VisualBuilderVbInstanceIdcsInfoList</a>

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.instanceUrl"></a>

```go
func InstanceUrl() *string
```

- *Type:* *string

---

##### `ManagementNatGatewayIp`<sup>Required</sup> <a name="ManagementNatGatewayIp" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.managementNatGatewayIp"></a>

```go
func ManagementNatGatewayIp() *string
```

- *Type:* *string

---

##### `ManagementVcnId`<sup>Required</sup> <a name="ManagementVcnId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.managementVcnId"></a>

```go
func ManagementVcnId() *string
```

- *Type:* *string

---

##### `ServiceNatGatewayIp`<sup>Required</sup> <a name="ServiceNatGatewayIp" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.serviceNatGatewayIp"></a>

```go
func ServiceNatGatewayIp() *string
```

- *Type:* *string

---

##### `ServiceVcnId`<sup>Required</sup> <a name="ServiceVcnId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.serviceVcnId"></a>

```go
func ServiceVcnId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeouts"></a>

```go
func Timeouts() VisualBuilderVbInstanceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference">VisualBuilderVbInstanceTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `AlternateCustomEndpointsInput`<sup>Optional</sup> <a name="AlternateCustomEndpointsInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.alternateCustomEndpointsInput"></a>

```go
func AlternateCustomEndpointsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConsumptionModelInput`<sup>Optional</sup> <a name="ConsumptionModelInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.consumptionModelInput"></a>

```go
func ConsumptionModelInput() *string
```

- *Type:* *string

---

##### `CustomEndpointInput`<sup>Optional</sup> <a name="CustomEndpointInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.customEndpointInput"></a>

```go
func CustomEndpointInput() VisualBuilderVbInstanceCustomEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdcsOpenIdInput`<sup>Optional</sup> <a name="IdcsOpenIdInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idcsOpenIdInput"></a>

```go
func IdcsOpenIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsVisualBuilderEnabledInput`<sup>Optional</sup> <a name="IsVisualBuilderEnabledInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.isVisualBuilderEnabledInput"></a>

```go
func IsVisualBuilderEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConsumptionModel`<sup>Required</sup> <a name="ConsumptionModel" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.consumptionModel"></a>

```go
func ConsumptionModel() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsOpenId`<sup>Required</sup> <a name="IdcsOpenId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idcsOpenId"></a>

```go
func IdcsOpenId() *string
```

- *Type:* *string

---

##### `IsVisualBuilderEnabled`<sup>Required</sup> <a name="IsVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.isVisualBuilderEnabled"></a>

```go
func IsVisualBuilderEnabled() interface{}
```

- *Type:* interface{}

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VisualBuilderVbInstanceAlternateCustomEndpoints <a name="VisualBuilderVbInstanceAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

&visualbuildervbinstance.VisualBuilderVbInstanceAlternateCustomEndpoints {
	Hostname: *string,
	CertificateSecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#hostname VisualBuilderVbInstance#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints.property.certificateSecretId">CertificateSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#certificate_secret_id VisualBuilderVbInstance#certificate_secret_id}. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#hostname VisualBuilderVbInstance#hostname}.

---

##### `CertificateSecretId`<sup>Optional</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints.property.certificateSecretId"></a>

```go
CertificateSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#certificate_secret_id VisualBuilderVbInstance#certificate_secret_id}.

---

### VisualBuilderVbInstanceAttachments <a name="VisualBuilderVbInstanceAttachments" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

&visualbuildervbinstance.VisualBuilderVbInstanceAttachments {

}
```


### VisualBuilderVbInstanceConfig <a name="VisualBuilderVbInstanceConfig" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

&visualbuildervbinstance.VisualBuilderVbInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	NodeCount: *f64,
	AlternateCustomEndpoints: interface{},
	ConsumptionModel: *string,
	CustomEndpoint: github.com/rhizo-co/cdktf-provider-oci-go/oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IdcsOpenId: *string,
	IsVisualBuilderEnabled: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#compartment_id VisualBuilderVbInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#display_name VisualBuilderVbInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#node_count VisualBuilderVbInstance#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.alternateCustomEndpoints">AlternateCustomEndpoints</a></code> | <code>interface{}</code> | alternate_custom_endpoints block. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.consumptionModel">ConsumptionModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#consumption_model VisualBuilderVbInstance#consumption_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.customEndpoint">CustomEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#defined_tags VisualBuilderVbInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#freeform_tags VisualBuilderVbInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#id VisualBuilderVbInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.idcsOpenId">IdcsOpenId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#idcs_open_id VisualBuilderVbInstance#idcs_open_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.isVisualBuilderEnabled">IsVisualBuilderEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#is_visual_builder_enabled VisualBuilderVbInstance#is_visual_builder_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts">VisualBuilderVbInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#compartment_id VisualBuilderVbInstance#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#display_name VisualBuilderVbInstance#display_name}.

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#node_count VisualBuilderVbInstance#node_count}.

---

##### `AlternateCustomEndpoints`<sup>Optional</sup> <a name="AlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.alternateCustomEndpoints"></a>

```go
AlternateCustomEndpoints interface{}
```

- *Type:* interface{}

alternate_custom_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#alternate_custom_endpoints VisualBuilderVbInstance#alternate_custom_endpoints}

---

##### `ConsumptionModel`<sup>Optional</sup> <a name="ConsumptionModel" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.consumptionModel"></a>

```go
ConsumptionModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#consumption_model VisualBuilderVbInstance#consumption_model}.

---

##### `CustomEndpoint`<sup>Optional</sup> <a name="CustomEndpoint" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.customEndpoint"></a>

```go
CustomEndpoint VisualBuilderVbInstanceCustomEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#custom_endpoint VisualBuilderVbInstance#custom_endpoint}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#defined_tags VisualBuilderVbInstance#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#freeform_tags VisualBuilderVbInstance#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#id VisualBuilderVbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdcsOpenId`<sup>Optional</sup> <a name="IdcsOpenId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.idcsOpenId"></a>

```go
IdcsOpenId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#idcs_open_id VisualBuilderVbInstance#idcs_open_id}.

---

##### `IsVisualBuilderEnabled`<sup>Optional</sup> <a name="IsVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.isVisualBuilderEnabled"></a>

```go
IsVisualBuilderEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#is_visual_builder_enabled VisualBuilderVbInstance#is_visual_builder_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.timeouts"></a>

```go
Timeouts VisualBuilderVbInstanceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts">VisualBuilderVbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#timeouts VisualBuilderVbInstance#timeouts}

---

### VisualBuilderVbInstanceCustomEndpoint <a name="VisualBuilderVbInstanceCustomEndpoint" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

&visualbuildervbinstance.VisualBuilderVbInstanceCustomEndpoint {
	Hostname: *string,
	CertificateSecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#hostname VisualBuilderVbInstance#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint.property.certificateSecretId">CertificateSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#certificate_secret_id VisualBuilderVbInstance#certificate_secret_id}. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#hostname VisualBuilderVbInstance#hostname}.

---

##### `CertificateSecretId`<sup>Optional</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint.property.certificateSecretId"></a>

```go
CertificateSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#certificate_secret_id VisualBuilderVbInstance#certificate_secret_id}.

---

### VisualBuilderVbInstanceIdcsInfo <a name="VisualBuilderVbInstanceIdcsInfo" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

&visualbuildervbinstance.VisualBuilderVbInstanceIdcsInfo {

}
```


### VisualBuilderVbInstanceTimeouts <a name="VisualBuilderVbInstanceTimeouts" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

&visualbuildervbinstance.VisualBuilderVbInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#create VisualBuilderVbInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#delete VisualBuilderVbInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#update VisualBuilderVbInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#create VisualBuilderVbInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#delete VisualBuilderVbInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#update VisualBuilderVbInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VisualBuilderVbInstanceAlternateCustomEndpointsList <a name="VisualBuilderVbInstanceAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

visualbuildervbinstance.NewVisualBuilderVbInstanceAlternateCustomEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VisualBuilderVbInstanceAlternateCustomEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.get"></a>

```go
func Get(index *f64) VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference <a name="VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

visualbuildervbinstance.NewVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resetCertificateSecretId">ResetCertificateSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateSecretId` <a name="ResetCertificateSecretId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resetCertificateSecretId"></a>

```go
func ResetCertificateSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">CertificateSecretVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretIdInput">CertificateSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId">CertificateSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateSecretVersion`<sup>Required</sup> <a name="CertificateSecretVersion" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```go
func CertificateSecretVersion() *f64
```

- *Type:* *f64

---

##### `CertificateSecretIdInput`<sup>Optional</sup> <a name="CertificateSecretIdInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretIdInput"></a>

```go
func CertificateSecretIdInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `CertificateSecretId`<sup>Required</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```go
func CertificateSecretId() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VisualBuilderVbInstanceAttachmentsList <a name="VisualBuilderVbInstanceAttachmentsList" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

visualbuildervbinstance.NewVisualBuilderVbInstanceAttachmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VisualBuilderVbInstanceAttachmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.get"></a>

```go
func Get(index *f64) VisualBuilderVbInstanceAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VisualBuilderVbInstanceAttachmentsOutputReference <a name="VisualBuilderVbInstanceAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

visualbuildervbinstance.NewVisualBuilderVbInstanceAttachmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VisualBuilderVbInstanceAttachmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.isImplicit">IsImplicit</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetInstanceUrl">TargetInstanceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetRole">TargetRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetServiceType">TargetServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachments">VisualBuilderVbInstanceAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsImplicit`<sup>Required</sup> <a name="IsImplicit" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.isImplicit"></a>

```go
func IsImplicit() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TargetInstanceUrl`<sup>Required</sup> <a name="TargetInstanceUrl" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetInstanceUrl"></a>

```go
func TargetInstanceUrl() *string
```

- *Type:* *string

---

##### `TargetRole`<sup>Required</sup> <a name="TargetRole" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetRole"></a>

```go
func TargetRole() *string
```

- *Type:* *string

---

##### `TargetServiceType`<sup>Required</sup> <a name="TargetServiceType" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetServiceType"></a>

```go
func TargetServiceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() VisualBuilderVbInstanceAttachments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachments">VisualBuilderVbInstanceAttachments</a>

---


### VisualBuilderVbInstanceCustomEndpointOutputReference <a name="VisualBuilderVbInstanceCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

visualbuildervbinstance.NewVisualBuilderVbInstanceCustomEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VisualBuilderVbInstanceCustomEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.resetCertificateSecretId">ResetCertificateSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateSecretId` <a name="ResetCertificateSecretId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.resetCertificateSecretId"></a>

```go
func ResetCertificateSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretVersion">CertificateSecretVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretIdInput">CertificateSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretId">CertificateSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateSecretVersion`<sup>Required</sup> <a name="CertificateSecretVersion" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```go
func CertificateSecretVersion() *f64
```

- *Type:* *f64

---

##### `CertificateSecretIdInput`<sup>Optional</sup> <a name="CertificateSecretIdInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretIdInput"></a>

```go
func CertificateSecretIdInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `CertificateSecretId`<sup>Required</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretId"></a>

```go
func CertificateSecretId() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() VisualBuilderVbInstanceCustomEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a>

---


### VisualBuilderVbInstanceIdcsInfoList <a name="VisualBuilderVbInstanceIdcsInfoList" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

visualbuildervbinstance.NewVisualBuilderVbInstanceIdcsInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VisualBuilderVbInstanceIdcsInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.get"></a>

```go
func Get(index *f64) VisualBuilderVbInstanceIdcsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VisualBuilderVbInstanceIdcsInfoOutputReference <a name="VisualBuilderVbInstanceIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

visualbuildervbinstance.NewVisualBuilderVbInstanceIdcsInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VisualBuilderVbInstanceIdcsInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppDisplayName">IdcsAppDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppId">IdcsAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl">IdcsAppLocationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppName">IdcsAppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">InstancePrimaryAudienceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfo">VisualBuilderVbInstanceIdcsInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdcsAppDisplayName`<sup>Required</sup> <a name="IdcsAppDisplayName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```go
func IdcsAppDisplayName() *string
```

- *Type:* *string

---

##### `IdcsAppId`<sup>Required</sup> <a name="IdcsAppId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppId"></a>

```go
func IdcsAppId() *string
```

- *Type:* *string

---

##### `IdcsAppLocationUrl`<sup>Required</sup> <a name="IdcsAppLocationUrl" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```go
func IdcsAppLocationUrl() *string
```

- *Type:* *string

---

##### `IdcsAppName`<sup>Required</sup> <a name="IdcsAppName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppName"></a>

```go
func IdcsAppName() *string
```

- *Type:* *string

---

##### `InstancePrimaryAudienceUrl`<sup>Required</sup> <a name="InstancePrimaryAudienceUrl" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```go
func InstancePrimaryAudienceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() VisualBuilderVbInstanceIdcsInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfo">VisualBuilderVbInstanceIdcsInfo</a>

---


### VisualBuilderVbInstanceTimeoutsOutputReference <a name="VisualBuilderVbInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/visualbuildervbinstance"

visualbuildervbinstance.NewVisualBuilderVbInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VisualBuilderVbInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



