# `databaseAutonomousVmClusterOrdsCertificateManagement` Submodule <a name="`databaseAutonomousVmClusterOrdsCertificateManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousVmClusterOrdsCertificateManagement <a name="DatabaseAutonomousVmClusterOrdsCertificateManagement" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management oci_database_autonomous_vm_cluster_ords_certificate_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousvmclusterordscertificatemanagement"

databaseautonomousvmclusterordscertificatemanagement.NewDatabaseAutonomousVmClusterOrdsCertificateManagement(scope Construct, id *string, config DatabaseAutonomousVmClusterOrdsCertificateManagementConfig) DatabaseAutonomousVmClusterOrdsCertificateManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig">DatabaseAutonomousVmClusterOrdsCertificateManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig">DatabaseAutonomousVmClusterOrdsCertificateManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCaBundleId">ResetCaBundleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateAuthorityId">ResetCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a>

---

##### `ResetCaBundleId` <a name="ResetCaBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCaBundleId"></a>

```go
func ResetCaBundleId()
```

##### `ResetCertificateAuthorityId` <a name="ResetCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateAuthorityId"></a>

```go
func ResetCertificateAuthorityId()
```

##### `ResetCertificateId` <a name="ResetCertificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateId"></a>

```go
func ResetCertificateId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousVmClusterOrdsCertificateManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousvmclusterordscertificatemanagement"

databaseautonomousvmclusterordscertificatemanagement.DatabaseAutonomousVmClusterOrdsCertificateManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousvmclusterordscertificatemanagement"

databaseautonomousvmclusterordscertificatemanagement.DatabaseAutonomousVmClusterOrdsCertificateManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousvmclusterordscertificatemanagement"

databaseautonomousvmclusterordscertificatemanagement.DatabaseAutonomousVmClusterOrdsCertificateManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousvmclusterordscertificatemanagement"

databaseautonomousvmclusterordscertificatemanagement.DatabaseAutonomousVmClusterOrdsCertificateManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseAutonomousVmClusterOrdsCertificateManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseAutonomousVmClusterOrdsCertificateManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseAutonomousVmClusterOrdsCertificateManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousVmClusterOrdsCertificateManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterIdInput">AutonomousVmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleIdInput">CaBundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityIdInput">CertificateAuthorityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationTypeInput">CertificateGenerationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateIdInput">CertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterId">AutonomousVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleId">CaBundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationType">CertificateGenerationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeouts"></a>

```go
func Timeouts() DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference</a>

---

##### `AutonomousVmClusterIdInput`<sup>Optional</sup> <a name="AutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterIdInput"></a>

```go
func AutonomousVmClusterIdInput() *string
```

- *Type:* *string

---

##### `CaBundleIdInput`<sup>Optional</sup> <a name="CaBundleIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleIdInput"></a>

```go
func CaBundleIdInput() *string
```

- *Type:* *string

---

##### `CertificateAuthorityIdInput`<sup>Optional</sup> <a name="CertificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityIdInput"></a>

```go
func CertificateAuthorityIdInput() *string
```

- *Type:* *string

---

##### `CertificateGenerationTypeInput`<sup>Optional</sup> <a name="CertificateGenerationTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationTypeInput"></a>

```go
func CertificateGenerationTypeInput() *string
```

- *Type:* *string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateIdInput"></a>

```go
func CertificateIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutonomousVmClusterId`<sup>Required</sup> <a name="AutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterId"></a>

```go
func AutonomousVmClusterId() *string
```

- *Type:* *string

---

##### `CaBundleId`<sup>Required</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleId"></a>

```go
func CaBundleId() *string
```

- *Type:* *string

---

##### `CertificateAuthorityId`<sup>Required</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityId"></a>

```go
func CertificateAuthorityId() *string
```

- *Type:* *string

---

##### `CertificateGenerationType`<sup>Required</sup> <a name="CertificateGenerationType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationType"></a>

```go
func CertificateGenerationType() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousVmClusterOrdsCertificateManagementConfig <a name="DatabaseAutonomousVmClusterOrdsCertificateManagementConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousvmclusterordscertificatemanagement"

&databaseautonomousvmclusterordscertificatemanagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousVmClusterId: *string,
	CertificateGenerationType: *string,
	CaBundleId: *string,
	CertificateAuthorityId: *string,
	CertificateId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.autonomousVmClusterId">AutonomousVmClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterOrdsCertificateManagement#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateGenerationType">CertificateGenerationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_generation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.caBundleId">CaBundleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterOrdsCertificateManagement#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateId">CertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#id DatabaseAutonomousVmClusterOrdsCertificateManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousVmClusterId`<sup>Required</sup> <a name="AutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.autonomousVmClusterId"></a>

```go
AutonomousVmClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterOrdsCertificateManagement#autonomous_vm_cluster_id}.

---

##### `CertificateGenerationType`<sup>Required</sup> <a name="CertificateGenerationType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateGenerationType"></a>

```go
CertificateGenerationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_generation_type}.

---

##### `CaBundleId`<sup>Optional</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.caBundleId"></a>

```go
CaBundleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterOrdsCertificateManagement#ca_bundle_id}.

---

##### `CertificateAuthorityId`<sup>Optional</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateAuthorityId"></a>

```go
CertificateAuthorityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_authority_id}.

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateId"></a>

```go
CertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#id DatabaseAutonomousVmClusterOrdsCertificateManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.timeouts"></a>

```go
Timeouts DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#timeouts DatabaseAutonomousVmClusterOrdsCertificateManagement#timeouts}

---

### DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts <a name="DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousvmclusterordscertificatemanagement"

&databaseautonomousvmclusterordscertificatemanagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#create DatabaseAutonomousVmClusterOrdsCertificateManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#delete DatabaseAutonomousVmClusterOrdsCertificateManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#update DatabaseAutonomousVmClusterOrdsCertificateManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#create DatabaseAutonomousVmClusterOrdsCertificateManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#delete DatabaseAutonomousVmClusterOrdsCertificateManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#update DatabaseAutonomousVmClusterOrdsCertificateManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference <a name="DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomousvmclusterordscertificatemanagement"

databaseautonomousvmclusterordscertificatemanagement.NewDatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



