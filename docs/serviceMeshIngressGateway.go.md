# `serviceMeshIngressGateway` Submodule <a name="`serviceMeshIngressGateway` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshIngressGateway <a name="ServiceMeshIngressGateway" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway oci_service_mesh_ingress_gateway}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.NewServiceMeshIngressGateway(scope Construct, id *string, config ServiceMeshIngressGatewayConfig) ServiceMeshIngressGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig">ServiceMeshIngressGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig">ServiceMeshIngressGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putAccessLogging">PutAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putHosts">PutHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putMtls">PutMtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetAccessLogging">ResetAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetMtls">ResetMtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessLogging` <a name="PutAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putAccessLogging"></a>

```go
func PutAccessLogging(value ServiceMeshIngressGatewayAccessLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putAccessLogging.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

---

##### `PutHosts` <a name="PutHosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putHosts"></a>

```go
func PutHosts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putHosts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMtls` <a name="PutMtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putMtls"></a>

```go
func PutMtls(value ServiceMeshIngressGatewayMtls)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putMtls.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putTimeouts"></a>

```go
func PutTimeouts(value ServiceMeshIngressGatewayTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>

---

##### `ResetAccessLogging` <a name="ResetAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetAccessLogging"></a>

```go
func ResetAccessLogging()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetId"></a>

```go
func ResetId()
```

##### `ResetMtls` <a name="ResetMtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetMtls"></a>

```go
func ResetMtls()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceMeshIngressGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.ServiceMeshIngressGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.ServiceMeshIngressGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.ServiceMeshIngressGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.ServiceMeshIngressGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServiceMeshIngressGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServiceMeshIngressGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServiceMeshIngressGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshIngressGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLogging">AccessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference">ServiceMeshIngressGatewayAccessLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hosts">Hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList">ServiceMeshIngressGatewayHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtls">Mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference">ServiceMeshIngressGatewayMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference">ServiceMeshIngressGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLoggingInput">AccessLoggingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hostsInput">HostsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshIdInput">MeshIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtlsInput">MtlsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshId">MeshId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessLogging`<sup>Required</sup> <a name="AccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLogging"></a>

```go
func AccessLogging() ServiceMeshIngressGatewayAccessLoggingOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference">ServiceMeshIngressGatewayAccessLoggingOutputReference</a>

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hosts"></a>

```go
func Hosts() ServiceMeshIngressGatewayHostsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList">ServiceMeshIngressGatewayHostsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Mtls`<sup>Required</sup> <a name="Mtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtls"></a>

```go
func Mtls() ServiceMeshIngressGatewayMtlsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference">ServiceMeshIngressGatewayMtlsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeouts"></a>

```go
func Timeouts() ServiceMeshIngressGatewayTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference">ServiceMeshIngressGatewayTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `AccessLoggingInput`<sup>Optional</sup> <a name="AccessLoggingInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLoggingInput"></a>

```go
func AccessLoggingInput() ServiceMeshIngressGatewayAccessLogging
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hostsInput"></a>

```go
func HostsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MeshIdInput`<sup>Optional</sup> <a name="MeshIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshIdInput"></a>

```go
func MeshIdInput() *string
```

- *Type:* *string

---

##### `MtlsInput`<sup>Optional</sup> <a name="MtlsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtlsInput"></a>

```go
func MtlsInput() ServiceMeshIngressGatewayMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MeshId`<sup>Required</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshId"></a>

```go
func MeshId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshIngressGatewayAccessLogging <a name="ServiceMeshIngressGatewayAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

&servicemeshingressgateway.ServiceMeshIngressGatewayAccessLogging {
	IsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#is_enabled ServiceMeshIngressGateway#is_enabled}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#is_enabled ServiceMeshIngressGateway#is_enabled}.

---

### ServiceMeshIngressGatewayConfig <a name="ServiceMeshIngressGatewayConfig" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

&servicemeshingressgateway.ServiceMeshIngressGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Hosts: interface{},
	MeshId: *string,
	Name: *string,
	AccessLogging: github.com/rhizo-co/cdktf-provider-oci-go/oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Mtls: github.com/rhizo-co/cdktf-provider-oci-go/oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#compartment_id ServiceMeshIngressGateway#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.hosts">Hosts</a></code> | <code>interface{}</code> | hosts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.meshId">MeshId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mesh_id ServiceMeshIngressGateway#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.accessLogging">AccessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a></code> | access_logging block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#defined_tags ServiceMeshIngressGateway#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#description ServiceMeshIngressGateway#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#freeform_tags ServiceMeshIngressGateway#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#id ServiceMeshIngressGateway#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.mtls">Mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a></code> | mtls block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#compartment_id ServiceMeshIngressGateway#compartment_id}.

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.hosts"></a>

```go
Hosts interface{}
```

- *Type:* interface{}

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#hosts ServiceMeshIngressGateway#hosts}

---

##### `MeshId`<sup>Required</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.meshId"></a>

```go
MeshId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mesh_id ServiceMeshIngressGateway#mesh_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}.

---

##### `AccessLogging`<sup>Optional</sup> <a name="AccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.accessLogging"></a>

```go
AccessLogging ServiceMeshIngressGatewayAccessLogging
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

access_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#access_logging ServiceMeshIngressGateway#access_logging}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#defined_tags ServiceMeshIngressGateway#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#description ServiceMeshIngressGateway#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#freeform_tags ServiceMeshIngressGateway#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#id ServiceMeshIngressGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mtls`<sup>Optional</sup> <a name="Mtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.mtls"></a>

```go
Mtls ServiceMeshIngressGatewayMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

mtls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mtls ServiceMeshIngressGateway#mtls}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.timeouts"></a>

```go
Timeouts ServiceMeshIngressGatewayTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#timeouts ServiceMeshIngressGateway#timeouts}

---

### ServiceMeshIngressGatewayHosts <a name="ServiceMeshIngressGatewayHosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

&servicemeshingressgateway.ServiceMeshIngressGatewayHosts {
	Listeners: interface{},
	Name: *string,
	Hostnames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.listeners">Listeners</a></code> | <code>interface{}</code> | listeners block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#hostnames ServiceMeshIngressGateway#hostnames}. |

---

##### `Listeners`<sup>Required</sup> <a name="Listeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.listeners"></a>

```go
Listeners interface{}
```

- *Type:* interface{}

listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#listeners ServiceMeshIngressGateway#listeners}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}.

---

##### `Hostnames`<sup>Optional</sup> <a name="Hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.hostnames"></a>

```go
Hostnames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#hostnames ServiceMeshIngressGateway#hostnames}.

---

### ServiceMeshIngressGatewayHostsListeners <a name="ServiceMeshIngressGatewayHostsListeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

&servicemeshingressgateway.ServiceMeshIngressGatewayHostsListeners {
	Port: *f64,
	Protocol: *string,
	Tls: github.com/rhizo-co/cdktf-provider-oci-go/oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#port ServiceMeshIngressGateway#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#protocol ServiceMeshIngressGateway#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.tls">Tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a></code> | tls block. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#port ServiceMeshIngressGateway#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#protocol ServiceMeshIngressGateway#protocol}.

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.tls"></a>

```go
Tls ServiceMeshIngressGatewayHostsListenersTls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#tls ServiceMeshIngressGateway#tls}

---

### ServiceMeshIngressGatewayHostsListenersTls <a name="ServiceMeshIngressGatewayHostsListenersTls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

&servicemeshingressgateway.ServiceMeshIngressGatewayHostsListenersTls {
	Mode: *string,
	ClientValidation: github.com/rhizo-co/cdktf-provider-oci-go/oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation,
	ServerCertificate: github.com/rhizo-co/cdktf-provider-oci-go/oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mode ServiceMeshIngressGateway#mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.clientValidation">ClientValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a></code> | client_validation block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.serverCertificate">ServerCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a></code> | server_certificate block. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mode ServiceMeshIngressGateway#mode}.

---

##### `ClientValidation`<sup>Optional</sup> <a name="ClientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.clientValidation"></a>

```go
ClientValidation ServiceMeshIngressGatewayHostsListenersTlsClientValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

client_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#client_validation ServiceMeshIngressGateway#client_validation}

---

##### `ServerCertificate`<sup>Optional</sup> <a name="ServerCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.serverCertificate"></a>

```go
ServerCertificate ServiceMeshIngressGatewayHostsListenersTlsServerCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

server_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#server_certificate ServiceMeshIngressGateway#server_certificate}

---

### ServiceMeshIngressGatewayHostsListenersTlsClientValidation <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

&servicemeshingressgateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation {
	SubjectAlternateNames: *[]*string,
	TrustedCaBundle: github.com/rhizo-co/cdktf-provider-oci-go/oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.subjectAlternateNames">SubjectAlternateNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#subject_alternate_names ServiceMeshIngressGateway#subject_alternate_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.trustedCaBundle">TrustedCaBundle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a></code> | trusted_ca_bundle block. |

---

##### `SubjectAlternateNames`<sup>Optional</sup> <a name="SubjectAlternateNames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.subjectAlternateNames"></a>

```go
SubjectAlternateNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#subject_alternate_names ServiceMeshIngressGateway#subject_alternate_names}.

---

##### `TrustedCaBundle`<sup>Optional</sup> <a name="TrustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.trustedCaBundle"></a>

```go
TrustedCaBundle ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

trusted_ca_bundle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#trusted_ca_bundle ServiceMeshIngressGateway#trusted_ca_bundle}

---

### ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

&servicemeshingressgateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle {
	Type: *string,
	CaBundleId: *string,
	SecretName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.caBundleId">CaBundleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#ca_bundle_id ServiceMeshIngressGateway#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}.

---

##### `CaBundleId`<sup>Optional</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.caBundleId"></a>

```go
CaBundleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#ca_bundle_id ServiceMeshIngressGateway#ca_bundle_id}.

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}.

---

### ServiceMeshIngressGatewayHostsListenersTlsServerCertificate <a name="ServiceMeshIngressGatewayHostsListenersTlsServerCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

&servicemeshingressgateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate {
	Type: *string,
	CertificateId: *string,
	SecretName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.certificateId">CertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#certificate_id ServiceMeshIngressGateway#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}.

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.certificateId"></a>

```go
CertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#certificate_id ServiceMeshIngressGateway#certificate_id}.

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}.

---

### ServiceMeshIngressGatewayMtls <a name="ServiceMeshIngressGatewayMtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

&servicemeshingressgateway.ServiceMeshIngressGatewayMtls {
	MaximumValidity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls.property.maximumValidity">MaximumValidity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#maximum_validity ServiceMeshIngressGateway#maximum_validity}. |

---

##### `MaximumValidity`<sup>Optional</sup> <a name="MaximumValidity" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls.property.maximumValidity"></a>

```go
MaximumValidity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#maximum_validity ServiceMeshIngressGateway#maximum_validity}.

---

### ServiceMeshIngressGatewayTimeouts <a name="ServiceMeshIngressGatewayTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

&servicemeshingressgateway.ServiceMeshIngressGatewayTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#create ServiceMeshIngressGateway#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#delete ServiceMeshIngressGateway#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#update ServiceMeshIngressGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#create ServiceMeshIngressGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#delete ServiceMeshIngressGateway#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#update ServiceMeshIngressGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshIngressGatewayAccessLoggingOutputReference <a name="ServiceMeshIngressGatewayAccessLoggingOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.NewServiceMeshIngressGatewayAccessLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceMeshIngressGatewayAccessLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceMeshIngressGatewayAccessLogging
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

---


### ServiceMeshIngressGatewayHostsList <a name="ServiceMeshIngressGatewayHostsList" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.NewServiceMeshIngressGatewayHostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceMeshIngressGatewayHostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.get"></a>

```go
func Get(index *f64) ServiceMeshIngressGatewayHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceMeshIngressGatewayHostsListenersList <a name="ServiceMeshIngressGatewayHostsListenersList" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.NewServiceMeshIngressGatewayHostsListenersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceMeshIngressGatewayHostsListenersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.get"></a>

```go
func Get(index *f64) ServiceMeshIngressGatewayHostsListenersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceMeshIngressGatewayHostsListenersOutputReference <a name="ServiceMeshIngressGatewayHostsListenersOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.NewServiceMeshIngressGatewayHostsListenersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceMeshIngressGatewayHostsListenersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTls` <a name="PutTls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.putTls"></a>

```go
func PutTls(value ServiceMeshIngressGatewayHostsListenersTls)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

---

##### `ResetTls` <a name="ResetTls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resetTls"></a>

```go
func ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tls">Tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference">ServiceMeshIngressGatewayHostsListenersTlsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tlsInput">TlsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tls"></a>

```go
func Tls() ServiceMeshIngressGatewayHostsListenersTlsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference">ServiceMeshIngressGatewayHostsListenersTlsOutputReference</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tlsInput"></a>

```go
func TlsInput() ServiceMeshIngressGatewayHostsListenersTls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.NewServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.putTrustedCaBundle">PutTrustedCaBundle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetSubjectAlternateNames">ResetSubjectAlternateNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetTrustedCaBundle">ResetTrustedCaBundle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrustedCaBundle` <a name="PutTrustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.putTrustedCaBundle"></a>

```go
func PutTrustedCaBundle(value ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.putTrustedCaBundle.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

---

##### `ResetSubjectAlternateNames` <a name="ResetSubjectAlternateNames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetSubjectAlternateNames"></a>

```go
func ResetSubjectAlternateNames()
```

##### `ResetTrustedCaBundle` <a name="ResetTrustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetTrustedCaBundle"></a>

```go
func ResetTrustedCaBundle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle">TrustedCaBundle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNamesInput">SubjectAlternateNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundleInput">TrustedCaBundleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames">SubjectAlternateNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TrustedCaBundle`<sup>Required</sup> <a name="TrustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle"></a>

```go
func TrustedCaBundle() ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference</a>

---

##### `SubjectAlternateNamesInput`<sup>Optional</sup> <a name="SubjectAlternateNamesInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNamesInput"></a>

```go
func SubjectAlternateNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TrustedCaBundleInput`<sup>Optional</sup> <a name="TrustedCaBundleInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundleInput"></a>

```go
func TrustedCaBundleInput() ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

---

##### `SubjectAlternateNames`<sup>Required</sup> <a name="SubjectAlternateNames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames"></a>

```go
func SubjectAlternateNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceMeshIngressGatewayHostsListenersTlsClientValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

---


### ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.NewServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetCaBundleId">ResetCaBundleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaBundleId` <a name="ResetCaBundleId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetCaBundleId"></a>

```go
func ResetCaBundleId()
```

##### `ResetSecretName` <a name="ResetSecretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetSecretName"></a>

```go
func ResetSecretName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleIdInput">CaBundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId">CaBundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaBundleIdInput`<sup>Optional</sup> <a name="CaBundleIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleIdInput"></a>

```go
func CaBundleIdInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CaBundleId`<sup>Required</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId"></a>

```go
func CaBundleId() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

---


### ServiceMeshIngressGatewayHostsListenersTlsOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.NewServiceMeshIngressGatewayHostsListenersTlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceMeshIngressGatewayHostsListenersTlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putClientValidation">PutClientValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putServerCertificate">PutServerCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetClientValidation">ResetClientValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetServerCertificate">ResetServerCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientValidation` <a name="PutClientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putClientValidation"></a>

```go
func PutClientValidation(value ServiceMeshIngressGatewayHostsListenersTlsClientValidation)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putClientValidation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

---

##### `PutServerCertificate` <a name="PutServerCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putServerCertificate"></a>

```go
func PutServerCertificate(value ServiceMeshIngressGatewayHostsListenersTlsServerCertificate)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putServerCertificate.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

---

##### `ResetClientValidation` <a name="ResetClientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetClientValidation"></a>

```go
func ResetClientValidation()
```

##### `ResetServerCertificate` <a name="ResetServerCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetServerCertificate"></a>

```go
func ResetServerCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidation">ClientValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificate">ServerCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference">ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidationInput">ClientValidationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificateInput">ServerCertificateInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientValidation`<sup>Required</sup> <a name="ClientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidation"></a>

```go
func ClientValidation() ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference</a>

---

##### `ServerCertificate`<sup>Required</sup> <a name="ServerCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificate"></a>

```go
func ServerCertificate() ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference">ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference</a>

---

##### `ClientValidationInput`<sup>Optional</sup> <a name="ClientValidationInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidationInput"></a>

```go
func ClientValidationInput() ServiceMeshIngressGatewayHostsListenersTlsClientValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ServerCertificateInput`<sup>Optional</sup> <a name="ServerCertificateInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificateInput"></a>

```go
func ServerCertificateInput() ServiceMeshIngressGatewayHostsListenersTlsServerCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceMeshIngressGatewayHostsListenersTls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

---


### ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.NewServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateId` <a name="ResetCertificateId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetCertificateId"></a>

```go
func ResetCertificateId()
```

##### `ResetSecretName` <a name="ResetSecretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetSecretName"></a>

```go
func ResetSecretName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateIdInput"></a>

```go
func CertificateIdInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceMeshIngressGatewayHostsListenersTlsServerCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

---


### ServiceMeshIngressGatewayHostsOutputReference <a name="ServiceMeshIngressGatewayHostsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.NewServiceMeshIngressGatewayHostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceMeshIngressGatewayHostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.putListeners">PutListeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resetHostnames">ResetHostnames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutListeners` <a name="PutListeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.putListeners"></a>

```go
func PutListeners(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.putListeners.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHostnames` <a name="ResetHostnames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resetHostnames"></a>

```go
func ResetHostnames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listeners">Listeners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList">ServiceMeshIngressGatewayHostsListenersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnamesInput">HostnamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listenersInput">ListenersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Listeners`<sup>Required</sup> <a name="Listeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listeners"></a>

```go
func Listeners() ServiceMeshIngressGatewayHostsListenersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList">ServiceMeshIngressGatewayHostsListenersList</a>

---

##### `HostnamesInput`<sup>Optional</sup> <a name="HostnamesInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnamesInput"></a>

```go
func HostnamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ListenersInput`<sup>Optional</sup> <a name="ListenersInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listenersInput"></a>

```go
func ListenersInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnames"></a>

```go
func Hostnames() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceMeshIngressGatewayMtlsOutputReference <a name="ServiceMeshIngressGatewayMtlsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.NewServiceMeshIngressGatewayMtlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceMeshIngressGatewayMtlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resetMaximumValidity">ResetMaximumValidity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumValidity` <a name="ResetMaximumValidity" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resetMaximumValidity"></a>

```go
func ResetMaximumValidity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidityInput">MaximumValidityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidity">MaximumValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `MaximumValidityInput`<sup>Optional</sup> <a name="MaximumValidityInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidityInput"></a>

```go
func MaximumValidityInput() *f64
```

- *Type:* *f64

---

##### `MaximumValidity`<sup>Required</sup> <a name="MaximumValidity" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidity"></a>

```go
func MaximumValidity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceMeshIngressGatewayMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

---


### ServiceMeshIngressGatewayTimeoutsOutputReference <a name="ServiceMeshIngressGatewayTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicemeshingressgateway"

servicemeshingressgateway.NewServiceMeshIngressGatewayTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceMeshIngressGatewayTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



