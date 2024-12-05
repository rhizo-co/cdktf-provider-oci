# `bdsBdsInstanceOperationCertificateManagementsManagement` Submodule <a name="`bdsBdsInstanceOperationCertificateManagementsManagement` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstanceOperationCertificateManagementsManagement <a name="BdsBdsInstanceOperationCertificateManagementsManagement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management oci_bds_bds_instance_operation_certificate_managements_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceoperationcertificatemanagementsmanagement"

bdsbdsinstanceoperationcertificatemanagementsmanagement.NewBdsBdsInstanceOperationCertificateManagementsManagement(scope Construct, id *string, config BdsBdsInstanceOperationCertificateManagementsManagementConfig) BdsBdsInstanceOperationCertificateManagementsManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig">BdsBdsInstanceOperationCertificateManagementsManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig">BdsBdsInstanceOperationCertificateManagementsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.putHostCertDetails">PutHostCertDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetHostCertDetails">ResetHostCertDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetRootCertificate">ResetRootCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetServerKeyPassword">ResetServerKeyPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHostCertDetails` <a name="PutHostCertDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.putHostCertDetails"></a>

```go
func PutHostCertDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.putHostCertDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.putTimeouts"></a>

```go
func PutTimeouts(value BdsBdsInstanceOperationCertificateManagementsManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts">BdsBdsInstanceOperationCertificateManagementsManagementTimeouts</a>

---

##### `ResetHostCertDetails` <a name="ResetHostCertDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetHostCertDetails"></a>

```go
func ResetHostCertDetails()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetRootCertificate` <a name="ResetRootCertificate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetRootCertificate"></a>

```go
func ResetRootCertificate()
```

##### `ResetServerKeyPassword` <a name="ResetServerKeyPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetServerKeyPassword"></a>

```go
func ResetServerKeyPassword()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BdsBdsInstanceOperationCertificateManagementsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceoperationcertificatemanagementsmanagement"

bdsbdsinstanceoperationcertificatemanagementsmanagement.BdsBdsInstanceOperationCertificateManagementsManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceoperationcertificatemanagementsmanagement"

bdsbdsinstanceoperationcertificatemanagementsmanagement.BdsBdsInstanceOperationCertificateManagementsManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceoperationcertificatemanagementsmanagement"

bdsbdsinstanceoperationcertificatemanagementsmanagement.BdsBdsInstanceOperationCertificateManagementsManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceoperationcertificatemanagementsmanagement"

bdsbdsinstanceoperationcertificatemanagementsmanagement.BdsBdsInstanceOperationCertificateManagementsManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BdsBdsInstanceOperationCertificateManagementsManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BdsBdsInstanceOperationCertificateManagementsManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BdsBdsInstanceOperationCertificateManagementsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstanceOperationCertificateManagementsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.hostCertDetails">HostCertDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference">BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.clusterAdminPasswordInput">ClusterAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.enableOperationCertificateManagementInput">EnableOperationCertificateManagementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.hostCertDetailsInput">HostCertDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.renewOperationCertificateManagementInput">RenewOperationCertificateManagementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.rootCertificateInput">RootCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.serverKeyPasswordInput">ServerKeyPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.servicesInput">ServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.enableOperationCertificateManagement">EnableOperationCertificateManagement</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.renewOperationCertificateManagement">RenewOperationCertificateManagement</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.rootCertificate">RootCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.serverKeyPassword">ServerKeyPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostCertDetails`<sup>Required</sup> <a name="HostCertDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.hostCertDetails"></a>

```go
func HostCertDetails() BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList">BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.timeouts"></a>

```go
func Timeouts() BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference">BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference</a>

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.bdsInstanceIdInput"></a>

```go
func BdsInstanceIdInput() *string
```

- *Type:* *string

---

##### `ClusterAdminPasswordInput`<sup>Optional</sup> <a name="ClusterAdminPasswordInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.clusterAdminPasswordInput"></a>

```go
func ClusterAdminPasswordInput() *string
```

- *Type:* *string

---

##### `EnableOperationCertificateManagementInput`<sup>Optional</sup> <a name="EnableOperationCertificateManagementInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.enableOperationCertificateManagementInput"></a>

```go
func EnableOperationCertificateManagementInput() interface{}
```

- *Type:* interface{}

---

##### `HostCertDetailsInput`<sup>Optional</sup> <a name="HostCertDetailsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.hostCertDetailsInput"></a>

```go
func HostCertDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RenewOperationCertificateManagementInput`<sup>Optional</sup> <a name="RenewOperationCertificateManagementInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.renewOperationCertificateManagementInput"></a>

```go
func RenewOperationCertificateManagementInput() interface{}
```

- *Type:* interface{}

---

##### `RootCertificateInput`<sup>Optional</sup> <a name="RootCertificateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.rootCertificateInput"></a>

```go
func RootCertificateInput() *string
```

- *Type:* *string

---

##### `ServerKeyPasswordInput`<sup>Optional</sup> <a name="ServerKeyPasswordInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.serverKeyPasswordInput"></a>

```go
func ServerKeyPasswordInput() *string
```

- *Type:* *string

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.servicesInput"></a>

```go
func ServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.bdsInstanceId"></a>

```go
func BdsInstanceId() *string
```

- *Type:* *string

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.clusterAdminPassword"></a>

```go
func ClusterAdminPassword() *string
```

- *Type:* *string

---

##### `EnableOperationCertificateManagement`<sup>Required</sup> <a name="EnableOperationCertificateManagement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.enableOperationCertificateManagement"></a>

```go
func EnableOperationCertificateManagement() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RenewOperationCertificateManagement`<sup>Required</sup> <a name="RenewOperationCertificateManagement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.renewOperationCertificateManagement"></a>

```go
func RenewOperationCertificateManagement() interface{}
```

- *Type:* interface{}

---

##### `RootCertificate`<sup>Required</sup> <a name="RootCertificate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.rootCertificate"></a>

```go
func RootCertificate() *string
```

- *Type:* *string

---

##### `ServerKeyPassword`<sup>Required</sup> <a name="ServerKeyPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.serverKeyPassword"></a>

```go
func ServerKeyPassword() *string
```

- *Type:* *string

---

##### `Services`<sup>Required</sup> <a name="Services" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceOperationCertificateManagementsManagementConfig <a name="BdsBdsInstanceOperationCertificateManagementsManagementConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceoperationcertificatemanagementsmanagement"

&bdsbdsinstanceoperationcertificatemanagementsmanagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BdsInstanceId: *string,
	ClusterAdminPassword: *string,
	EnableOperationCertificateManagement: interface{},
	RenewOperationCertificateManagement: interface{},
	Services: *[]*string,
	HostCertDetails: interface{},
	Id: *string,
	RootCertificate: *string,
	ServerKeyPassword: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#bds_instance_id BdsBdsInstanceOperationCertificateManagementsManagement#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#cluster_admin_password BdsBdsInstanceOperationCertificateManagementsManagement#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.enableOperationCertificateManagement">EnableOperationCertificateManagement</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#enable_operation_certificate_management BdsBdsInstanceOperationCertificateManagementsManagement#enable_operation_certificate_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.renewOperationCertificateManagement">RenewOperationCertificateManagement</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#renew_operation_certificate_management BdsBdsInstanceOperationCertificateManagementsManagement#renew_operation_certificate_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.services">Services</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#services BdsBdsInstanceOperationCertificateManagementsManagement#services}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.hostCertDetails">HostCertDetails</a></code> | <code>interface{}</code> | host_cert_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#id BdsBdsInstanceOperationCertificateManagementsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.rootCertificate">RootCertificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#root_certificate BdsBdsInstanceOperationCertificateManagementsManagement#root_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.serverKeyPassword">ServerKeyPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#server_key_password BdsBdsInstanceOperationCertificateManagementsManagement#server_key_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts">BdsBdsInstanceOperationCertificateManagementsManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.bdsInstanceId"></a>

```go
BdsInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#bds_instance_id BdsBdsInstanceOperationCertificateManagementsManagement#bds_instance_id}.

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.clusterAdminPassword"></a>

```go
ClusterAdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#cluster_admin_password BdsBdsInstanceOperationCertificateManagementsManagement#cluster_admin_password}.

---

##### `EnableOperationCertificateManagement`<sup>Required</sup> <a name="EnableOperationCertificateManagement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.enableOperationCertificateManagement"></a>

```go
EnableOperationCertificateManagement interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#enable_operation_certificate_management BdsBdsInstanceOperationCertificateManagementsManagement#enable_operation_certificate_management}.

---

##### `RenewOperationCertificateManagement`<sup>Required</sup> <a name="RenewOperationCertificateManagement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.renewOperationCertificateManagement"></a>

```go
RenewOperationCertificateManagement interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#renew_operation_certificate_management BdsBdsInstanceOperationCertificateManagementsManagement#renew_operation_certificate_management}.

---

##### `Services`<sup>Required</sup> <a name="Services" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.services"></a>

```go
Services *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#services BdsBdsInstanceOperationCertificateManagementsManagement#services}.

---

##### `HostCertDetails`<sup>Optional</sup> <a name="HostCertDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.hostCertDetails"></a>

```go
HostCertDetails interface{}
```

- *Type:* interface{}

host_cert_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#host_cert_details BdsBdsInstanceOperationCertificateManagementsManagement#host_cert_details}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#id BdsBdsInstanceOperationCertificateManagementsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RootCertificate`<sup>Optional</sup> <a name="RootCertificate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.rootCertificate"></a>

```go
RootCertificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#root_certificate BdsBdsInstanceOperationCertificateManagementsManagement#root_certificate}.

---

##### `ServerKeyPassword`<sup>Optional</sup> <a name="ServerKeyPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.serverKeyPassword"></a>

```go
ServerKeyPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#server_key_password BdsBdsInstanceOperationCertificateManagementsManagement#server_key_password}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementConfig.property.timeouts"></a>

```go
Timeouts BdsBdsInstanceOperationCertificateManagementsManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts">BdsBdsInstanceOperationCertificateManagementsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#timeouts BdsBdsInstanceOperationCertificateManagementsManagement#timeouts}

---

### BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails <a name="BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceoperationcertificatemanagementsmanagement"

&bdsbdsinstanceoperationcertificatemanagementsmanagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails {
	Certificate: *string,
	HostName: *string,
	PrivateKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#certificate BdsBdsInstanceOperationCertificateManagementsManagement#certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#host_name BdsBdsInstanceOperationCertificateManagementsManagement#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#private_key BdsBdsInstanceOperationCertificateManagementsManagement#private_key}. |

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#certificate BdsBdsInstanceOperationCertificateManagementsManagement#certificate}.

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#host_name BdsBdsInstanceOperationCertificateManagementsManagement#host_name}.

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetails.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#private_key BdsBdsInstanceOperationCertificateManagementsManagement#private_key}.

---

### BdsBdsInstanceOperationCertificateManagementsManagementTimeouts <a name="BdsBdsInstanceOperationCertificateManagementsManagementTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceoperationcertificatemanagementsmanagement"

&bdsbdsinstanceoperationcertificatemanagementsmanagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#create BdsBdsInstanceOperationCertificateManagementsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#delete BdsBdsInstanceOperationCertificateManagementsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#update BdsBdsInstanceOperationCertificateManagementsManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#create BdsBdsInstanceOperationCertificateManagementsManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#delete BdsBdsInstanceOperationCertificateManagementsManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_operation_certificate_managements_management#update BdsBdsInstanceOperationCertificateManagementsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList <a name="BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceoperationcertificatemanagementsmanagement"

bdsbdsinstanceoperationcertificatemanagementsmanagement.NewBdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.get"></a>

```go
func Get(index *f64) BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference <a name="BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceoperationcertificatemanagementsmanagement"

bdsbdsinstanceoperationcertificatemanagementsmanagement.NewBdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetHostName` <a name="ResetHostName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resetHostName"></a>

```go
func ResetHostName()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementHostCertDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference <a name="BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceoperationcertificatemanagementsmanagement"

bdsbdsinstanceoperationcertificatemanagementsmanagement.NewBdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOperationCertificateManagementsManagement.BdsBdsInstanceOperationCertificateManagementsManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



