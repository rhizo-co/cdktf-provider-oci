# `containerengineClusterWorkloadMapping` Submodule <a name="`containerengineClusterWorkloadMapping` Submodule" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerengineClusterWorkloadMapping <a name="ContainerengineClusterWorkloadMapping" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping oci_containerengine_cluster_workload_mapping}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterworkloadmapping"

containerengineclusterworkloadmapping.NewContainerengineClusterWorkloadMapping(scope Construct, id *string, config ContainerengineClusterWorkloadMappingConfig) ContainerengineClusterWorkloadMapping
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig">ContainerengineClusterWorkloadMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig">ContainerengineClusterWorkloadMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.putTimeouts"></a>

```go
func PutTimeouts(value ContainerengineClusterWorkloadMappingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeouts">ContainerengineClusterWorkloadMappingTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerengineClusterWorkloadMapping resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterworkloadmapping"

containerengineclusterworkloadmapping.ContainerengineClusterWorkloadMapping_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterworkloadmapping"

containerengineclusterworkloadmapping.ContainerengineClusterWorkloadMapping_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterworkloadmapping"

containerengineclusterworkloadmapping.ContainerengineClusterWorkloadMapping_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterworkloadmapping"

containerengineclusterworkloadmapping.ContainerengineClusterWorkloadMapping_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ContainerengineClusterWorkloadMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContainerengineClusterWorkloadMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContainerengineClusterWorkloadMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ContainerengineClusterWorkloadMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.mappedTenancyId">MappedTenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference">ContainerengineClusterWorkloadMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.mappedCompartmentIdInput">MappedCompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.mappedCompartmentId">MappedCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MappedTenancyId`<sup>Required</sup> <a name="MappedTenancyId" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.mappedTenancyId"></a>

```go
func MappedTenancyId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.timeouts"></a>

```go
func Timeouts() ContainerengineClusterWorkloadMappingTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference">ContainerengineClusterWorkloadMappingTimeoutsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MappedCompartmentIdInput`<sup>Optional</sup> <a name="MappedCompartmentIdInput" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.mappedCompartmentIdInput"></a>

```go
func MappedCompartmentIdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MappedCompartmentId`<sup>Required</sup> <a name="MappedCompartmentId" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.mappedCompartmentId"></a>

```go
func MappedCompartmentId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMapping.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerengineClusterWorkloadMappingConfig <a name="ContainerengineClusterWorkloadMappingConfig" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterworkloadmapping"

&containerengineclusterworkloadmapping.ContainerengineClusterWorkloadMappingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	MappedCompartmentId: *string,
	Namespace: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#cluster_id ContainerengineClusterWorkloadMapping#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.mappedCompartmentId">MappedCompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#mapped_compartment_id ContainerengineClusterWorkloadMapping#mapped_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#namespace ContainerengineClusterWorkloadMapping#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#defined_tags ContainerengineClusterWorkloadMapping#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#freeform_tags ContainerengineClusterWorkloadMapping#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#id ContainerengineClusterWorkloadMapping#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeouts">ContainerengineClusterWorkloadMappingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#cluster_id ContainerengineClusterWorkloadMapping#cluster_id}.

---

##### `MappedCompartmentId`<sup>Required</sup> <a name="MappedCompartmentId" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.mappedCompartmentId"></a>

```go
MappedCompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#mapped_compartment_id ContainerengineClusterWorkloadMapping#mapped_compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#namespace ContainerengineClusterWorkloadMapping#namespace}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#defined_tags ContainerengineClusterWorkloadMapping#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#freeform_tags ContainerengineClusterWorkloadMapping#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#id ContainerengineClusterWorkloadMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingConfig.property.timeouts"></a>

```go
Timeouts ContainerengineClusterWorkloadMappingTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeouts">ContainerengineClusterWorkloadMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#timeouts ContainerengineClusterWorkloadMapping#timeouts}

---

### ContainerengineClusterWorkloadMappingTimeouts <a name="ContainerengineClusterWorkloadMappingTimeouts" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterworkloadmapping"

&containerengineclusterworkloadmapping.ContainerengineClusterWorkloadMappingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#create ContainerengineClusterWorkloadMapping#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#delete ContainerengineClusterWorkloadMapping#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#update ContainerengineClusterWorkloadMapping#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#create ContainerengineClusterWorkloadMapping#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#delete ContainerengineClusterWorkloadMapping#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster_workload_mapping#update ContainerengineClusterWorkloadMapping#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerengineClusterWorkloadMappingTimeoutsOutputReference <a name="ContainerengineClusterWorkloadMappingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerengineclusterworkloadmapping"

containerengineclusterworkloadmapping.NewContainerengineClusterWorkloadMappingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineClusterWorkloadMappingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineClusterWorkloadMapping.ContainerengineClusterWorkloadMappingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



