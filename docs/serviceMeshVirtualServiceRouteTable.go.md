# `serviceMeshVirtualServiceRouteTable` Submodule <a name="`serviceMeshVirtualServiceRouteTable` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshVirtualServiceRouteTable <a name="ServiceMeshVirtualServiceRouteTable" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table oci_service_mesh_virtual_service_route_table}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshvirtualserviceroutetable"

servicemeshvirtualserviceroutetable.NewServiceMeshVirtualServiceRouteTable(scope Construct, id *string, config ServiceMeshVirtualServiceRouteTableConfig) ServiceMeshVirtualServiceRouteTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig">ServiceMeshVirtualServiceRouteTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig">ServiceMeshVirtualServiceRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putRouteRules">PutRouteRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRouteRules` <a name="PutRouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putRouteRules"></a>

```go
func PutRouteRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putRouteRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putTimeouts"></a>

```go
func PutTimeouts(value ServiceMeshVirtualServiceRouteTableTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts">ServiceMeshVirtualServiceRouteTableTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetId"></a>

```go
func ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceMeshVirtualServiceRouteTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshvirtualserviceroutetable"

servicemeshvirtualserviceroutetable.ServiceMeshVirtualServiceRouteTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshvirtualserviceroutetable"

servicemeshvirtualserviceroutetable.ServiceMeshVirtualServiceRouteTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshvirtualserviceroutetable"

servicemeshvirtualserviceroutetable.ServiceMeshVirtualServiceRouteTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshvirtualserviceroutetable"

servicemeshvirtualserviceroutetable.ServiceMeshVirtualServiceRouteTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServiceMeshVirtualServiceRouteTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServiceMeshVirtualServiceRouteTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServiceMeshVirtualServiceRouteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshVirtualServiceRouteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.routeRules">RouteRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList">ServiceMeshVirtualServiceRouteTableRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference">ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.routeRulesInput">RouteRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.virtualServiceIdInput">VirtualServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.virtualServiceId">VirtualServiceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `RouteRules`<sup>Required</sup> <a name="RouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.routeRules"></a>

```go
func RouteRules() ServiceMeshVirtualServiceRouteTableRouteRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList">ServiceMeshVirtualServiceRouteTableRouteRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeouts"></a>

```go
func Timeouts() ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference">ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RouteRulesInput`<sup>Optional</sup> <a name="RouteRulesInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.routeRulesInput"></a>

```go
func RouteRulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualServiceIdInput`<sup>Optional</sup> <a name="VirtualServiceIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.virtualServiceIdInput"></a>

```go
func VirtualServiceIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `VirtualServiceId`<sup>Required</sup> <a name="VirtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.virtualServiceId"></a>

```go
func VirtualServiceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshVirtualServiceRouteTableConfig <a name="ServiceMeshVirtualServiceRouteTableConfig" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshvirtualserviceroutetable"

&servicemeshvirtualserviceroutetable.ServiceMeshVirtualServiceRouteTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Name: *string,
	RouteRules: interface{},
	VirtualServiceId: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Priority: *f64,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#compartment_id ServiceMeshVirtualServiceRouteTable#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#name ServiceMeshVirtualServiceRouteTable#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.routeRules">RouteRules</a></code> | <code>interface{}</code> | route_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.virtualServiceId">VirtualServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#virtual_service_id ServiceMeshVirtualServiceRouteTable#virtual_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#defined_tags ServiceMeshVirtualServiceRouteTable#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#description ServiceMeshVirtualServiceRouteTable#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#freeform_tags ServiceMeshVirtualServiceRouteTable#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#id ServiceMeshVirtualServiceRouteTable#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#priority ServiceMeshVirtualServiceRouteTable#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts">ServiceMeshVirtualServiceRouteTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#compartment_id ServiceMeshVirtualServiceRouteTable#compartment_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#name ServiceMeshVirtualServiceRouteTable#name}.

---

##### `RouteRules`<sup>Required</sup> <a name="RouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.routeRules"></a>

```go
RouteRules interface{}
```

- *Type:* interface{}

route_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#route_rules ServiceMeshVirtualServiceRouteTable#route_rules}

---

##### `VirtualServiceId`<sup>Required</sup> <a name="VirtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.virtualServiceId"></a>

```go
VirtualServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#virtual_service_id ServiceMeshVirtualServiceRouteTable#virtual_service_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#defined_tags ServiceMeshVirtualServiceRouteTable#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#description ServiceMeshVirtualServiceRouteTable#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#freeform_tags ServiceMeshVirtualServiceRouteTable#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#id ServiceMeshVirtualServiceRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#priority ServiceMeshVirtualServiceRouteTable#priority}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.timeouts"></a>

```go
Timeouts ServiceMeshVirtualServiceRouteTableTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts">ServiceMeshVirtualServiceRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#timeouts ServiceMeshVirtualServiceRouteTable#timeouts}

---

### ServiceMeshVirtualServiceRouteTableRouteRules <a name="ServiceMeshVirtualServiceRouteTableRouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshvirtualserviceroutetable"

&servicemeshvirtualserviceroutetable.ServiceMeshVirtualServiceRouteTableRouteRules {
	Destinations: interface{},
	Type: *string,
	IsGrpc: interface{},
	Path: *string,
	PathType: *string,
	RequestTimeoutInMs: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.destinations">Destinations</a></code> | <code>interface{}</code> | destinations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#type ServiceMeshVirtualServiceRouteTable#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.isGrpc">IsGrpc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#is_grpc ServiceMeshVirtualServiceRouteTable#is_grpc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#path ServiceMeshVirtualServiceRouteTable#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.pathType">PathType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#path_type ServiceMeshVirtualServiceRouteTable#path_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.requestTimeoutInMs">RequestTimeoutInMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#request_timeout_in_ms ServiceMeshVirtualServiceRouteTable#request_timeout_in_ms}. |

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#destinations ServiceMeshVirtualServiceRouteTable#destinations}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#type ServiceMeshVirtualServiceRouteTable#type}.

---

##### `IsGrpc`<sup>Optional</sup> <a name="IsGrpc" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.isGrpc"></a>

```go
IsGrpc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#is_grpc ServiceMeshVirtualServiceRouteTable#is_grpc}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#path ServiceMeshVirtualServiceRouteTable#path}.

---

##### `PathType`<sup>Optional</sup> <a name="PathType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.pathType"></a>

```go
PathType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#path_type ServiceMeshVirtualServiceRouteTable#path_type}.

---

##### `RequestTimeoutInMs`<sup>Optional</sup> <a name="RequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.requestTimeoutInMs"></a>

```go
RequestTimeoutInMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#request_timeout_in_ms ServiceMeshVirtualServiceRouteTable#request_timeout_in_ms}.

---

### ServiceMeshVirtualServiceRouteTableRouteRulesDestinations <a name="ServiceMeshVirtualServiceRouteTableRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshvirtualserviceroutetable"

&servicemeshvirtualserviceroutetable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations {
	VirtualDeploymentId: *string,
	Weight: *f64,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.virtualDeploymentId">VirtualDeploymentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#virtual_deployment_id ServiceMeshVirtualServiceRouteTable#virtual_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#weight ServiceMeshVirtualServiceRouteTable#weight}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#port ServiceMeshVirtualServiceRouteTable#port}. |

---

##### `VirtualDeploymentId`<sup>Required</sup> <a name="VirtualDeploymentId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.virtualDeploymentId"></a>

```go
VirtualDeploymentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#virtual_deployment_id ServiceMeshVirtualServiceRouteTable#virtual_deployment_id}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#weight ServiceMeshVirtualServiceRouteTable#weight}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#port ServiceMeshVirtualServiceRouteTable#port}.

---

### ServiceMeshVirtualServiceRouteTableTimeouts <a name="ServiceMeshVirtualServiceRouteTableTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshvirtualserviceroutetable"

&servicemeshvirtualserviceroutetable.ServiceMeshVirtualServiceRouteTableTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#create ServiceMeshVirtualServiceRouteTable#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#delete ServiceMeshVirtualServiceRouteTable#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#update ServiceMeshVirtualServiceRouteTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#create ServiceMeshVirtualServiceRouteTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#delete ServiceMeshVirtualServiceRouteTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#update ServiceMeshVirtualServiceRouteTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList <a name="ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshvirtualserviceroutetable"

servicemeshvirtualserviceroutetable.NewServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get"></a>

```go
func Get(index *f64) ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference <a name="ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshvirtualserviceroutetable"

servicemeshvirtualserviceroutetable.NewServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentIdInput">VirtualDeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentId">VirtualDeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `VirtualDeploymentIdInput`<sup>Optional</sup> <a name="VirtualDeploymentIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentIdInput"></a>

```go
func VirtualDeploymentIdInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `VirtualDeploymentId`<sup>Required</sup> <a name="VirtualDeploymentId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentId"></a>

```go
func VirtualDeploymentId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceMeshVirtualServiceRouteTableRouteRulesList <a name="ServiceMeshVirtualServiceRouteTableRouteRulesList" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshvirtualserviceroutetable"

servicemeshvirtualserviceroutetable.NewServiceMeshVirtualServiceRouteTableRouteRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceMeshVirtualServiceRouteTableRouteRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.get"></a>

```go
func Get(index *f64) ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference <a name="ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshvirtualserviceroutetable"

servicemeshvirtualserviceroutetable.NewServiceMeshVirtualServiceRouteTableRouteRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetIsGrpc">ResetIsGrpc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetPathType">ResetPathType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetRequestTimeoutInMs">ResetRequestTimeoutInMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIsGrpc` <a name="ResetIsGrpc" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetIsGrpc"></a>

```go
func ResetIsGrpc()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPathType` <a name="ResetPathType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetPathType"></a>

```go
func ResetPathType()
```

##### `ResetRequestTimeoutInMs` <a name="ResetRequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetRequestTimeoutInMs"></a>

```go
func ResetRequestTimeoutInMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinations">Destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList">ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpcInput">IsGrpcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathTypeInput">PathTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMsInput">RequestTimeoutInMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpc">IsGrpc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathType">PathType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMs">RequestTimeoutInMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinations"></a>

```go
func Destinations() ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList">ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `IsGrpcInput`<sup>Optional</sup> <a name="IsGrpcInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpcInput"></a>

```go
func IsGrpcInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PathTypeInput`<sup>Optional</sup> <a name="PathTypeInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathTypeInput"></a>

```go
func PathTypeInput() *string
```

- *Type:* *string

---

##### `RequestTimeoutInMsInput`<sup>Optional</sup> <a name="RequestTimeoutInMsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMsInput"></a>

```go
func RequestTimeoutInMsInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IsGrpc`<sup>Required</sup> <a name="IsGrpc" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpc"></a>

```go
func IsGrpc() interface{}
```

- *Type:* interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PathType`<sup>Required</sup> <a name="PathType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathType"></a>

```go
func PathType() *string
```

- *Type:* *string

---

##### `RequestTimeoutInMs`<sup>Required</sup> <a name="RequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```go
func RequestTimeoutInMs() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference <a name="ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshvirtualserviceroutetable"

servicemeshvirtualserviceroutetable.NewServiceMeshVirtualServiceRouteTableTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



