# `serviceMeshIngressGatewayRouteTable` Submodule <a name="`serviceMeshIngressGatewayRouteTable` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshIngressGatewayRouteTable <a name="ServiceMeshIngressGatewayRouteTable" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table oci_service_mesh_ingress_gateway_route_table}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

servicemeshingressgatewayroutetable.NewServiceMeshIngressGatewayRouteTable(scope Construct, id *string, config ServiceMeshIngressGatewayRouteTableConfig) ServiceMeshIngressGatewayRouteTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig">ServiceMeshIngressGatewayRouteTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig">ServiceMeshIngressGatewayRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putRouteRules">PutRouteRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRouteRules` <a name="PutRouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putRouteRules"></a>

```go
func PutRouteRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putRouteRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putTimeouts"></a>

```go
func PutTimeouts(value ServiceMeshIngressGatewayRouteTableTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetId"></a>

```go
func ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceMeshIngressGatewayRouteTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

servicemeshingressgatewayroutetable.ServiceMeshIngressGatewayRouteTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

servicemeshingressgatewayroutetable.ServiceMeshIngressGatewayRouteTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

servicemeshingressgatewayroutetable.ServiceMeshIngressGatewayRouteTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

servicemeshingressgatewayroutetable.ServiceMeshIngressGatewayRouteTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServiceMeshIngressGatewayRouteTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServiceMeshIngressGatewayRouteTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServiceMeshIngressGatewayRouteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshIngressGatewayRouteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.routeRules">RouteRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList">ServiceMeshIngressGatewayRouteTableRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference">ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.ingressGatewayIdInput">IngressGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.routeRulesInput">RouteRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.ingressGatewayId">IngressGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `RouteRules`<sup>Required</sup> <a name="RouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.routeRules"></a>

```go
func RouteRules() ServiceMeshIngressGatewayRouteTableRouteRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList">ServiceMeshIngressGatewayRouteTableRouteRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeouts"></a>

```go
func Timeouts() ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference">ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressGatewayIdInput`<sup>Optional</sup> <a name="IngressGatewayIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.ingressGatewayIdInput"></a>

```go
func IngressGatewayIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RouteRulesInput`<sup>Optional</sup> <a name="RouteRulesInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.routeRulesInput"></a>

```go
func RouteRulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IngressGatewayId`<sup>Required</sup> <a name="IngressGatewayId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.ingressGatewayId"></a>

```go
func IngressGatewayId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshIngressGatewayRouteTableConfig <a name="ServiceMeshIngressGatewayRouteTableConfig" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

&servicemeshingressgatewayroutetable.ServiceMeshIngressGatewayRouteTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	IngressGatewayId: *string,
	Name: *string,
	RouteRules: interface{},
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Priority: *f64,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#compartment_id ServiceMeshIngressGatewayRouteTable#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.ingressGatewayId">IngressGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#ingress_gateway_id ServiceMeshIngressGatewayRouteTable#ingress_gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.routeRules">RouteRules</a></code> | <code>interface{}</code> | route_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#defined_tags ServiceMeshIngressGatewayRouteTable#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#description ServiceMeshIngressGatewayRouteTable#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#freeform_tags ServiceMeshIngressGatewayRouteTable#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#id ServiceMeshIngressGatewayRouteTable#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#priority ServiceMeshIngressGatewayRouteTable#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#compartment_id ServiceMeshIngressGatewayRouteTable#compartment_id}.

---

##### `IngressGatewayId`<sup>Required</sup> <a name="IngressGatewayId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.ingressGatewayId"></a>

```go
IngressGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#ingress_gateway_id ServiceMeshIngressGatewayRouteTable#ingress_gateway_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}.

---

##### `RouteRules`<sup>Required</sup> <a name="RouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.routeRules"></a>

```go
RouteRules interface{}
```

- *Type:* interface{}

route_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#route_rules ServiceMeshIngressGatewayRouteTable#route_rules}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#defined_tags ServiceMeshIngressGatewayRouteTable#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#description ServiceMeshIngressGatewayRouteTable#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#freeform_tags ServiceMeshIngressGatewayRouteTable#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#id ServiceMeshIngressGatewayRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#priority ServiceMeshIngressGatewayRouteTable#priority}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableConfig.property.timeouts"></a>

```go
Timeouts ServiceMeshIngressGatewayRouteTableTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts">ServiceMeshIngressGatewayRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#timeouts ServiceMeshIngressGatewayRouteTable#timeouts}

---

### ServiceMeshIngressGatewayRouteTableRouteRules <a name="ServiceMeshIngressGatewayRouteTableRouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

&servicemeshingressgatewayroutetable.ServiceMeshIngressGatewayRouteTableRouteRules {
	Destinations: interface{},
	Type: *string,
	IngressGatewayHost: github.com/rhizo-co/cdktf-provider-oci-go/oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost,
	IsGrpc: interface{},
	IsHostRewriteEnabled: interface{},
	IsPathRewriteEnabled: interface{},
	Path: *string,
	PathType: *string,
	RequestTimeoutInMs: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.destinations">Destinations</a></code> | <code>interface{}</code> | destinations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#type ServiceMeshIngressGatewayRouteTable#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.ingressGatewayHost">IngressGatewayHost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a></code> | ingress_gateway_host block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isGrpc">IsGrpc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_grpc ServiceMeshIngressGatewayRouteTable#is_grpc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isHostRewriteEnabled">IsHostRewriteEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_host_rewrite_enabled ServiceMeshIngressGatewayRouteTable#is_host_rewrite_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isPathRewriteEnabled">IsPathRewriteEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_path_rewrite_enabled ServiceMeshIngressGatewayRouteTable#is_path_rewrite_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#path ServiceMeshIngressGatewayRouteTable#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.pathType">PathType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#path_type ServiceMeshIngressGatewayRouteTable#path_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.requestTimeoutInMs">RequestTimeoutInMs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#request_timeout_in_ms ServiceMeshIngressGatewayRouteTable#request_timeout_in_ms}. |

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#destinations ServiceMeshIngressGatewayRouteTable#destinations}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#type ServiceMeshIngressGatewayRouteTable#type}.

---

##### `IngressGatewayHost`<sup>Optional</sup> <a name="IngressGatewayHost" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.ingressGatewayHost"></a>

```go
IngressGatewayHost ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a>

ingress_gateway_host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#ingress_gateway_host ServiceMeshIngressGatewayRouteTable#ingress_gateway_host}

---

##### `IsGrpc`<sup>Optional</sup> <a name="IsGrpc" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isGrpc"></a>

```go
IsGrpc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_grpc ServiceMeshIngressGatewayRouteTable#is_grpc}.

---

##### `IsHostRewriteEnabled`<sup>Optional</sup> <a name="IsHostRewriteEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isHostRewriteEnabled"></a>

```go
IsHostRewriteEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_host_rewrite_enabled ServiceMeshIngressGatewayRouteTable#is_host_rewrite_enabled}.

---

##### `IsPathRewriteEnabled`<sup>Optional</sup> <a name="IsPathRewriteEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.isPathRewriteEnabled"></a>

```go
IsPathRewriteEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#is_path_rewrite_enabled ServiceMeshIngressGatewayRouteTable#is_path_rewrite_enabled}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#path ServiceMeshIngressGatewayRouteTable#path}.

---

##### `PathType`<sup>Optional</sup> <a name="PathType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.pathType"></a>

```go
PathType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#path_type ServiceMeshIngressGatewayRouteTable#path_type}.

---

##### `RequestTimeoutInMs`<sup>Optional</sup> <a name="RequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRules.property.requestTimeoutInMs"></a>

```go
RequestTimeoutInMs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#request_timeout_in_ms ServiceMeshIngressGatewayRouteTable#request_timeout_in_ms}.

---

### ServiceMeshIngressGatewayRouteTableRouteRulesDestinations <a name="ServiceMeshIngressGatewayRouteTableRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

&servicemeshingressgatewayroutetable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations {
	VirtualServiceId: *string,
	Port: *f64,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.virtualServiceId">VirtualServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#virtual_service_id ServiceMeshIngressGatewayRouteTable#virtual_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#weight ServiceMeshIngressGatewayRouteTable#weight}. |

---

##### `VirtualServiceId`<sup>Required</sup> <a name="VirtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.virtualServiceId"></a>

```go
VirtualServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#virtual_service_id ServiceMeshIngressGatewayRouteTable#virtual_service_id}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinations.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#weight ServiceMeshIngressGatewayRouteTable#weight}.

---

### ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost <a name="ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

&servicemeshingressgatewayroutetable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost {
	Name: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#name ServiceMeshIngressGatewayRouteTable#name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#port ServiceMeshIngressGatewayRouteTable#port}.

---

### ServiceMeshIngressGatewayRouteTableTimeouts <a name="ServiceMeshIngressGatewayRouteTableTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

&servicemeshingressgatewayroutetable.ServiceMeshIngressGatewayRouteTableTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#create ServiceMeshIngressGatewayRouteTable#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#delete ServiceMeshIngressGatewayRouteTable#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#update ServiceMeshIngressGatewayRouteTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#create ServiceMeshIngressGatewayRouteTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#delete ServiceMeshIngressGatewayRouteTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway_route_table#update ServiceMeshIngressGatewayRouteTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList <a name="ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

servicemeshingressgatewayroutetable.NewServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get"></a>

```go
func Get(index *f64) ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference <a name="ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

servicemeshingressgatewayroutetable.NewServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetWeight` <a name="ResetWeight" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceIdInput">VirtualServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceId">VirtualServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `VirtualServiceIdInput`<sup>Optional</sup> <a name="VirtualServiceIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceIdInput"></a>

```go
func VirtualServiceIdInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `VirtualServiceId`<sup>Required</sup> <a name="VirtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.virtualServiceId"></a>

```go
func VirtualServiceId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference <a name="ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

servicemeshingressgatewayroutetable.NewServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a>

---


### ServiceMeshIngressGatewayRouteTableRouteRulesList <a name="ServiceMeshIngressGatewayRouteTableRouteRulesList" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

servicemeshingressgatewayroutetable.NewServiceMeshIngressGatewayRouteTableRouteRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceMeshIngressGatewayRouteTableRouteRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.get"></a>

```go
func Get(index *f64) ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference <a name="ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

servicemeshingressgatewayroutetable.NewServiceMeshIngressGatewayRouteTableRouteRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putIngressGatewayHost">PutIngressGatewayHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIngressGatewayHost">ResetIngressGatewayHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsGrpc">ResetIsGrpc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsHostRewriteEnabled">ResetIsHostRewriteEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsPathRewriteEnabled">ResetIsPathRewriteEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetPathType">ResetPathType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetRequestTimeoutInMs">ResetRequestTimeoutInMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIngressGatewayHost` <a name="PutIngressGatewayHost" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putIngressGatewayHost"></a>

```go
func PutIngressGatewayHost(value ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.putIngressGatewayHost.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a>

---

##### `ResetIngressGatewayHost` <a name="ResetIngressGatewayHost" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIngressGatewayHost"></a>

```go
func ResetIngressGatewayHost()
```

##### `ResetIsGrpc` <a name="ResetIsGrpc" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsGrpc"></a>

```go
func ResetIsGrpc()
```

##### `ResetIsHostRewriteEnabled` <a name="ResetIsHostRewriteEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsHostRewriteEnabled"></a>

```go
func ResetIsHostRewriteEnabled()
```

##### `ResetIsPathRewriteEnabled` <a name="ResetIsPathRewriteEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetIsPathRewriteEnabled"></a>

```go
func ResetIsPathRewriteEnabled()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPathType` <a name="ResetPathType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetPathType"></a>

```go
func ResetPathType()
```

##### `ResetRequestTimeoutInMs` <a name="ResetRequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.resetRequestTimeoutInMs"></a>

```go
func ResetRequestTimeoutInMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinations">Destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList">ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHost">IngressGatewayHost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHostInput">IngressGatewayHostInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpcInput">IsGrpcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabledInput">IsHostRewriteEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabledInput">IsPathRewriteEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathTypeInput">PathTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMsInput">RequestTimeoutInMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpc">IsGrpc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabled">IsHostRewriteEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabled">IsPathRewriteEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathType">PathType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMs">RequestTimeoutInMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinations"></a>

```go
func Destinations() ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList">ServiceMeshIngressGatewayRouteTableRouteRulesDestinationsList</a>

---

##### `IngressGatewayHost`<sup>Required</sup> <a name="IngressGatewayHost" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHost"></a>

```go
func IngressGatewayHost() ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHostOutputReference</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `IngressGatewayHostInput`<sup>Optional</sup> <a name="IngressGatewayHostInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.ingressGatewayHostInput"></a>

```go
func IngressGatewayHostInput() ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost">ServiceMeshIngressGatewayRouteTableRouteRulesIngressGatewayHost</a>

---

##### `IsGrpcInput`<sup>Optional</sup> <a name="IsGrpcInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpcInput"></a>

```go
func IsGrpcInput() interface{}
```

- *Type:* interface{}

---

##### `IsHostRewriteEnabledInput`<sup>Optional</sup> <a name="IsHostRewriteEnabledInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabledInput"></a>

```go
func IsHostRewriteEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsPathRewriteEnabledInput`<sup>Optional</sup> <a name="IsPathRewriteEnabledInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabledInput"></a>

```go
func IsPathRewriteEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PathTypeInput`<sup>Optional</sup> <a name="PathTypeInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathTypeInput"></a>

```go
func PathTypeInput() *string
```

- *Type:* *string

---

##### `RequestTimeoutInMsInput`<sup>Optional</sup> <a name="RequestTimeoutInMsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMsInput"></a>

```go
func RequestTimeoutInMsInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IsGrpc`<sup>Required</sup> <a name="IsGrpc" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isGrpc"></a>

```go
func IsGrpc() interface{}
```

- *Type:* interface{}

---

##### `IsHostRewriteEnabled`<sup>Required</sup> <a name="IsHostRewriteEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isHostRewriteEnabled"></a>

```go
func IsHostRewriteEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsPathRewriteEnabled`<sup>Required</sup> <a name="IsPathRewriteEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.isPathRewriteEnabled"></a>

```go
func IsPathRewriteEnabled() interface{}
```

- *Type:* interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PathType`<sup>Required</sup> <a name="PathType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.pathType"></a>

```go
func PathType() *string
```

- *Type:* *string

---

##### `RequestTimeoutInMs`<sup>Required</sup> <a name="RequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```go
func RequestTimeoutInMs() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableRouteRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference <a name="ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgatewayroutetable"

servicemeshingressgatewayroutetable.NewServiceMeshIngressGatewayRouteTableTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGatewayRouteTable.ServiceMeshIngressGatewayRouteTableTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



