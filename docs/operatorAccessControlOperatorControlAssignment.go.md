# `operatorAccessControlOperatorControlAssignment` Submodule <a name="`operatorAccessControlOperatorControlAssignment` Submodule" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OperatorAccessControlOperatorControlAssignment <a name="OperatorAccessControlOperatorControlAssignment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment oci_operator_access_control_operator_control_assignment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/operatoraccesscontroloperatorcontrolassignment"

operatoraccesscontroloperatorcontrolassignment.NewOperatorAccessControlOperatorControlAssignment(scope Construct, id *string, config OperatorAccessControlOperatorControlAssignmentConfig) OperatorAccessControlOperatorControlAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig">OperatorAccessControlOperatorControlAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig">OperatorAccessControlOperatorControlAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsAutoApproveDuringMaintenance">ResetIsAutoApproveDuringMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsHypervisorLogForwarded">ResetIsHypervisorLogForwarded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsLogForwarded">ResetIsLogForwarded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerAddress">ResetRemoteSyslogServerAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerCaCert">ResetRemoteSyslogServerCaCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerPort">ResetRemoteSyslogServerPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentFrom">ResetTimeAssignmentFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentTo">ResetTimeAssignmentTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetValidateAssignmentTrigger">ResetValidateAssignmentTrigger</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.putTimeouts"></a>

```go
func PutTimeouts(value OperatorAccessControlOperatorControlAssignmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetId"></a>

```go
func ResetId()
```

##### `ResetIsAutoApproveDuringMaintenance` <a name="ResetIsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsAutoApproveDuringMaintenance"></a>

```go
func ResetIsAutoApproveDuringMaintenance()
```

##### `ResetIsHypervisorLogForwarded` <a name="ResetIsHypervisorLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsHypervisorLogForwarded"></a>

```go
func ResetIsHypervisorLogForwarded()
```

##### `ResetIsLogForwarded` <a name="ResetIsLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetIsLogForwarded"></a>

```go
func ResetIsLogForwarded()
```

##### `ResetRemoteSyslogServerAddress` <a name="ResetRemoteSyslogServerAddress" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerAddress"></a>

```go
func ResetRemoteSyslogServerAddress()
```

##### `ResetRemoteSyslogServerCaCert` <a name="ResetRemoteSyslogServerCaCert" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerCaCert"></a>

```go
func ResetRemoteSyslogServerCaCert()
```

##### `ResetRemoteSyslogServerPort` <a name="ResetRemoteSyslogServerPort" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetRemoteSyslogServerPort"></a>

```go
func ResetRemoteSyslogServerPort()
```

##### `ResetTimeAssignmentFrom` <a name="ResetTimeAssignmentFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentFrom"></a>

```go
func ResetTimeAssignmentFrom()
```

##### `ResetTimeAssignmentTo` <a name="ResetTimeAssignmentTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeAssignmentTo"></a>

```go
func ResetTimeAssignmentTo()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetValidateAssignmentTrigger` <a name="ResetValidateAssignmentTrigger" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.resetValidateAssignmentTrigger"></a>

```go
func ResetValidateAssignmentTrigger()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/operatoraccesscontroloperatorcontrolassignment"

operatoraccesscontroloperatorcontrolassignment.OperatorAccessControlOperatorControlAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/operatoraccesscontroloperatorcontrolassignment"

operatoraccesscontroloperatorcontrolassignment.OperatorAccessControlOperatorControlAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/operatoraccesscontroloperatorcontrolassignment"

operatoraccesscontroloperatorcontrolassignment.OperatorAccessControlOperatorControlAssignment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/operatoraccesscontroloperatorcontrolassignment"

operatoraccesscontroloperatorcontrolassignment.OperatorAccessControlOperatorControlAssignment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OperatorAccessControlOperatorControlAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OperatorAccessControlOperatorControlAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OperatorAccessControlOperatorControlAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.assignerId">AssignerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.detachmentDescription">DetachmentDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorCode">ErrorCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isDefaultAssignment">IsDefaultAssignment</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.opControlName">OpControlName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfAssignment">TimeOfAssignment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference">OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.unassignerId">UnassignerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenanceInput">IsAutoApproveDuringMaintenanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlwaysInput">IsEnforcedAlwaysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwardedInput">IsHypervisorLogForwardedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwardedInput">IsLogForwardedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlIdInput">OperatorControlIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddressInput">RemoteSyslogServerAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCertInput">RemoteSyslogServerCaCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPortInput">RemoteSyslogServerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentIdInput">ResourceCompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceNameInput">ResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFromInput">TimeAssignmentFromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentToInput">TimeAssignmentToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTriggerInput">ValidateAssignmentTriggerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenance">IsAutoApproveDuringMaintenance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlways">IsEnforcedAlways</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwarded">IsHypervisorLogForwarded</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwarded">IsLogForwarded</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlId">OperatorControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddress">RemoteSyslogServerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCert">RemoteSyslogServerCaCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPort">RemoteSyslogServerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentId">ResourceCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFrom">TimeAssignmentFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentTo">TimeAssignmentTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTrigger">ValidateAssignmentTrigger</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssignerId`<sup>Required</sup> <a name="AssignerId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.assignerId"></a>

```go
func AssignerId() *string
```

- *Type:* *string

---

##### `DetachmentDescription`<sup>Required</sup> <a name="DetachmentDescription" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.detachmentDescription"></a>

```go
func DetachmentDescription() *string
```

- *Type:* *string

---

##### `ErrorCode`<sup>Required</sup> <a name="ErrorCode" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorCode"></a>

```go
func ErrorCode() *f64
```

- *Type:* *f64

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `IsDefaultAssignment`<sup>Required</sup> <a name="IsDefaultAssignment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isDefaultAssignment"></a>

```go
func IsDefaultAssignment() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `OpControlName`<sup>Required</sup> <a name="OpControlName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.opControlName"></a>

```go
func OpControlName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeOfAssignment`<sup>Required</sup> <a name="TimeOfAssignment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfAssignment"></a>

```go
func TimeOfAssignment() *string
```

- *Type:* *string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeouts"></a>

```go
func Timeouts() OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference">OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference</a>

---

##### `UnassignerId`<sup>Required</sup> <a name="UnassignerId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.unassignerId"></a>

```go
func UnassignerId() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsAutoApproveDuringMaintenanceInput`<sup>Optional</sup> <a name="IsAutoApproveDuringMaintenanceInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenanceInput"></a>

```go
func IsAutoApproveDuringMaintenanceInput() interface{}
```

- *Type:* interface{}

---

##### `IsEnforcedAlwaysInput`<sup>Optional</sup> <a name="IsEnforcedAlwaysInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlwaysInput"></a>

```go
func IsEnforcedAlwaysInput() interface{}
```

- *Type:* interface{}

---

##### `IsHypervisorLogForwardedInput`<sup>Optional</sup> <a name="IsHypervisorLogForwardedInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwardedInput"></a>

```go
func IsHypervisorLogForwardedInput() interface{}
```

- *Type:* interface{}

---

##### `IsLogForwardedInput`<sup>Optional</sup> <a name="IsLogForwardedInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwardedInput"></a>

```go
func IsLogForwardedInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorControlIdInput`<sup>Optional</sup> <a name="OperatorControlIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlIdInput"></a>

```go
func OperatorControlIdInput() *string
```

- *Type:* *string

---

##### `RemoteSyslogServerAddressInput`<sup>Optional</sup> <a name="RemoteSyslogServerAddressInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddressInput"></a>

```go
func RemoteSyslogServerAddressInput() *string
```

- *Type:* *string

---

##### `RemoteSyslogServerCaCertInput`<sup>Optional</sup> <a name="RemoteSyslogServerCaCertInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCertInput"></a>

```go
func RemoteSyslogServerCaCertInput() *string
```

- *Type:* *string

---

##### `RemoteSyslogServerPortInput`<sup>Optional</sup> <a name="RemoteSyslogServerPortInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPortInput"></a>

```go
func RemoteSyslogServerPortInput() *f64
```

- *Type:* *f64

---

##### `ResourceCompartmentIdInput`<sup>Optional</sup> <a name="ResourceCompartmentIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentIdInput"></a>

```go
func ResourceCompartmentIdInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceNameInput"></a>

```go
func ResourceNameInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `TimeAssignmentFromInput`<sup>Optional</sup> <a name="TimeAssignmentFromInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFromInput"></a>

```go
func TimeAssignmentFromInput() *string
```

- *Type:* *string

---

##### `TimeAssignmentToInput`<sup>Optional</sup> <a name="TimeAssignmentToInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentToInput"></a>

```go
func TimeAssignmentToInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidateAssignmentTriggerInput`<sup>Optional</sup> <a name="ValidateAssignmentTriggerInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTriggerInput"></a>

```go
func ValidateAssignmentTriggerInput() *f64
```

- *Type:* *f64

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAutoApproveDuringMaintenance`<sup>Required</sup> <a name="IsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenance"></a>

```go
func IsAutoApproveDuringMaintenance() interface{}
```

- *Type:* interface{}

---

##### `IsEnforcedAlways`<sup>Required</sup> <a name="IsEnforcedAlways" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isEnforcedAlways"></a>

```go
func IsEnforcedAlways() interface{}
```

- *Type:* interface{}

---

##### `IsHypervisorLogForwarded`<sup>Required</sup> <a name="IsHypervisorLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwarded"></a>

```go
func IsHypervisorLogForwarded() interface{}
```

- *Type:* interface{}

---

##### `IsLogForwarded`<sup>Required</sup> <a name="IsLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.isLogForwarded"></a>

```go
func IsLogForwarded() interface{}
```

- *Type:* interface{}

---

##### `OperatorControlId`<sup>Required</sup> <a name="OperatorControlId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.operatorControlId"></a>

```go
func OperatorControlId() *string
```

- *Type:* *string

---

##### `RemoteSyslogServerAddress`<sup>Required</sup> <a name="RemoteSyslogServerAddress" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddress"></a>

```go
func RemoteSyslogServerAddress() *string
```

- *Type:* *string

---

##### `RemoteSyslogServerCaCert`<sup>Required</sup> <a name="RemoteSyslogServerCaCert" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCert"></a>

```go
func RemoteSyslogServerCaCert() *string
```

- *Type:* *string

---

##### `RemoteSyslogServerPort`<sup>Required</sup> <a name="RemoteSyslogServerPort" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPort"></a>

```go
func RemoteSyslogServerPort() *f64
```

- *Type:* *f64

---

##### `ResourceCompartmentId`<sup>Required</sup> <a name="ResourceCompartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceCompartmentId"></a>

```go
func ResourceCompartmentId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `TimeAssignmentFrom`<sup>Required</sup> <a name="TimeAssignmentFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentFrom"></a>

```go
func TimeAssignmentFrom() *string
```

- *Type:* *string

---

##### `TimeAssignmentTo`<sup>Required</sup> <a name="TimeAssignmentTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.timeAssignmentTo"></a>

```go
func TimeAssignmentTo() *string
```

- *Type:* *string

---

##### `ValidateAssignmentTrigger`<sup>Required</sup> <a name="ValidateAssignmentTrigger" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.validateAssignmentTrigger"></a>

```go
func ValidateAssignmentTrigger() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OperatorAccessControlOperatorControlAssignmentConfig <a name="OperatorAccessControlOperatorControlAssignmentConfig" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/operatoraccesscontroloperatorcontrolassignment"

&operatoraccesscontroloperatorcontrolassignment.OperatorAccessControlOperatorControlAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	IsEnforcedAlways: interface{},
	OperatorControlId: *string,
	ResourceCompartmentId: *string,
	ResourceId: *string,
	ResourceName: *string,
	ResourceType: *string,
	Comment: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsAutoApproveDuringMaintenance: interface{},
	IsHypervisorLogForwarded: interface{},
	IsLogForwarded: interface{},
	RemoteSyslogServerAddress: *string,
	RemoteSyslogServerCaCert: *string,
	RemoteSyslogServerPort: *f64,
	TimeAssignmentFrom: *string,
	TimeAssignmentTo: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts,
	ValidateAssignmentTrigger: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#compartment_id OperatorAccessControlOperatorControlAssignment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isEnforcedAlways">IsEnforcedAlways</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_enforced_always OperatorAccessControlOperatorControlAssignment#is_enforced_always}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.operatorControlId">OperatorControlId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#operator_control_id OperatorAccessControlOperatorControlAssignment#operator_control_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceCompartmentId">ResourceCompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_compartment_id OperatorAccessControlOperatorControlAssignment#resource_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_id OperatorAccessControlOperatorControlAssignment#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceName">ResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_name OperatorAccessControlOperatorControlAssignment#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_type OperatorAccessControlOperatorControlAssignment#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#comment OperatorAccessControlOperatorControlAssignment#comment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#defined_tags OperatorAccessControlOperatorControlAssignment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#freeform_tags OperatorAccessControlOperatorControlAssignment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#id OperatorAccessControlOperatorControlAssignment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isAutoApproveDuringMaintenance">IsAutoApproveDuringMaintenance</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_auto_approve_during_maintenance OperatorAccessControlOperatorControlAssignment#is_auto_approve_during_maintenance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isHypervisorLogForwarded">IsHypervisorLogForwarded</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_hypervisor_log_forwarded OperatorAccessControlOperatorControlAssignment#is_hypervisor_log_forwarded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isLogForwarded">IsLogForwarded</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_log_forwarded OperatorAccessControlOperatorControlAssignment#is_log_forwarded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerAddress">RemoteSyslogServerAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_address OperatorAccessControlOperatorControlAssignment#remote_syslog_server_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerCaCert">RemoteSyslogServerCaCert</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_ca_cert OperatorAccessControlOperatorControlAssignment#remote_syslog_server_ca_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerPort">RemoteSyslogServerPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_port OperatorAccessControlOperatorControlAssignment#remote_syslog_server_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentFrom">TimeAssignmentFrom</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_from OperatorAccessControlOperatorControlAssignment#time_assignment_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentTo">TimeAssignmentTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_to OperatorAccessControlOperatorControlAssignment#time_assignment_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.validateAssignmentTrigger">ValidateAssignmentTrigger</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#validate_assignment_trigger OperatorAccessControlOperatorControlAssignment#validate_assignment_trigger}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#compartment_id OperatorAccessControlOperatorControlAssignment#compartment_id}.

---

##### `IsEnforcedAlways`<sup>Required</sup> <a name="IsEnforcedAlways" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isEnforcedAlways"></a>

```go
IsEnforcedAlways interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_enforced_always OperatorAccessControlOperatorControlAssignment#is_enforced_always}.

---

##### `OperatorControlId`<sup>Required</sup> <a name="OperatorControlId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.operatorControlId"></a>

```go
OperatorControlId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#operator_control_id OperatorAccessControlOperatorControlAssignment#operator_control_id}.

---

##### `ResourceCompartmentId`<sup>Required</sup> <a name="ResourceCompartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceCompartmentId"></a>

```go
ResourceCompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_compartment_id OperatorAccessControlOperatorControlAssignment#resource_compartment_id}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_id OperatorAccessControlOperatorControlAssignment#resource_id}.

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceName"></a>

```go
ResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_name OperatorAccessControlOperatorControlAssignment#resource_name}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#resource_type OperatorAccessControlOperatorControlAssignment#resource_type}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#comment OperatorAccessControlOperatorControlAssignment#comment}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#defined_tags OperatorAccessControlOperatorControlAssignment#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#freeform_tags OperatorAccessControlOperatorControlAssignment#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#id OperatorAccessControlOperatorControlAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAutoApproveDuringMaintenance`<sup>Optional</sup> <a name="IsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isAutoApproveDuringMaintenance"></a>

```go
IsAutoApproveDuringMaintenance interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_auto_approve_during_maintenance OperatorAccessControlOperatorControlAssignment#is_auto_approve_during_maintenance}.

---

##### `IsHypervisorLogForwarded`<sup>Optional</sup> <a name="IsHypervisorLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isHypervisorLogForwarded"></a>

```go
IsHypervisorLogForwarded interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_hypervisor_log_forwarded OperatorAccessControlOperatorControlAssignment#is_hypervisor_log_forwarded}.

---

##### `IsLogForwarded`<sup>Optional</sup> <a name="IsLogForwarded" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.isLogForwarded"></a>

```go
IsLogForwarded interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#is_log_forwarded OperatorAccessControlOperatorControlAssignment#is_log_forwarded}.

---

##### `RemoteSyslogServerAddress`<sup>Optional</sup> <a name="RemoteSyslogServerAddress" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerAddress"></a>

```go
RemoteSyslogServerAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_address OperatorAccessControlOperatorControlAssignment#remote_syslog_server_address}.

---

##### `RemoteSyslogServerCaCert`<sup>Optional</sup> <a name="RemoteSyslogServerCaCert" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerCaCert"></a>

```go
RemoteSyslogServerCaCert *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_ca_cert OperatorAccessControlOperatorControlAssignment#remote_syslog_server_ca_cert}.

---

##### `RemoteSyslogServerPort`<sup>Optional</sup> <a name="RemoteSyslogServerPort" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.remoteSyslogServerPort"></a>

```go
RemoteSyslogServerPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_port OperatorAccessControlOperatorControlAssignment#remote_syslog_server_port}.

---

##### `TimeAssignmentFrom`<sup>Optional</sup> <a name="TimeAssignmentFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentFrom"></a>

```go
TimeAssignmentFrom *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_from OperatorAccessControlOperatorControlAssignment#time_assignment_from}.

---

##### `TimeAssignmentTo`<sup>Optional</sup> <a name="TimeAssignmentTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeAssignmentTo"></a>

```go
TimeAssignmentTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_to OperatorAccessControlOperatorControlAssignment#time_assignment_to}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.timeouts"></a>

```go
Timeouts OperatorAccessControlOperatorControlAssignmentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts">OperatorAccessControlOperatorControlAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#timeouts OperatorAccessControlOperatorControlAssignment#timeouts}

---

##### `ValidateAssignmentTrigger`<sup>Optional</sup> <a name="ValidateAssignmentTrigger" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentConfig.property.validateAssignmentTrigger"></a>

```go
ValidateAssignmentTrigger *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#validate_assignment_trigger OperatorAccessControlOperatorControlAssignment#validate_assignment_trigger}.

---

### OperatorAccessControlOperatorControlAssignmentTimeouts <a name="OperatorAccessControlOperatorControlAssignmentTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/operatoraccesscontroloperatorcontrolassignment"

&operatoraccesscontroloperatorcontrolassignment.OperatorAccessControlOperatorControlAssignmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#create OperatorAccessControlOperatorControlAssignment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#delete OperatorAccessControlOperatorControlAssignment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#update OperatorAccessControlOperatorControlAssignment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#create OperatorAccessControlOperatorControlAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#delete OperatorAccessControlOperatorControlAssignment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control_assignment#update OperatorAccessControlOperatorControlAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference <a name="OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/operatoraccesscontroloperatorcontrolassignment"

operatoraccesscontroloperatorcontrolassignment.NewOperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControlAssignment.OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



