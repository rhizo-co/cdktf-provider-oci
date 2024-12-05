# `delegateAccessControlDelegationControl` Submodule <a name="`delegateAccessControlDelegationControl` Submodule" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DelegateAccessControlDelegationControl <a name="DelegateAccessControlDelegationControl" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control oci_delegate_access_control_delegation_control}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/delegateaccesscontroldelegationcontrol"

delegateaccesscontroldelegationcontrol.NewDelegateAccessControlDelegationControl(scope Construct, id *string, config DelegateAccessControlDelegationControlConfig) DelegateAccessControlDelegationControl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig">DelegateAccessControlDelegationControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig">DelegateAccessControlDelegationControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetIsAutoApproveDuringMaintenance">ResetIsAutoApproveDuringMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetNumApprovalsRequired">ResetNumApprovalsRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetPreApprovedServiceProviderActionNames">ResetPreApprovedServiceProviderActionNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultId">ResetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultKeyId">ResetVaultKeyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.putTimeouts"></a>

```go
func PutTimeouts(value DelegateAccessControlDelegationControlTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetId"></a>

```go
func ResetId()
```

##### `ResetIsAutoApproveDuringMaintenance` <a name="ResetIsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetIsAutoApproveDuringMaintenance"></a>

```go
func ResetIsAutoApproveDuringMaintenance()
```

##### `ResetNumApprovalsRequired` <a name="ResetNumApprovalsRequired" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetNumApprovalsRequired"></a>

```go
func ResetNumApprovalsRequired()
```

##### `ResetPreApprovedServiceProviderActionNames` <a name="ResetPreApprovedServiceProviderActionNames" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetPreApprovedServiceProviderActionNames"></a>

```go
func ResetPreApprovedServiceProviderActionNames()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVaultId` <a name="ResetVaultId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultId"></a>

```go
func ResetVaultId()
```

##### `ResetVaultKeyId` <a name="ResetVaultKeyId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultKeyId"></a>

```go
func ResetVaultKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DelegateAccessControlDelegationControl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/delegateaccesscontroldelegationcontrol"

delegateaccesscontroldelegationcontrol.DelegateAccessControlDelegationControl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/delegateaccesscontroldelegationcontrol"

delegateaccesscontroldelegationcontrol.DelegateAccessControlDelegationControl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/delegateaccesscontroldelegationcontrol"

delegateaccesscontroldelegationcontrol.DelegateAccessControlDelegationControl_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/delegateaccesscontroldelegationcontrol"

delegateaccesscontroldelegationcontrol.DelegateAccessControlDelegationControl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DelegateAccessControlDelegationControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DelegateAccessControlDelegationControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DelegateAccessControlDelegationControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DelegateAccessControlDelegationControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeDeleted">TimeDeleted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference">DelegateAccessControlDelegationControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIdsInput">DelegationSubscriptionIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenanceInput">IsAutoApproveDuringMaintenanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormatInput">NotificationMessageFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicIdInput">NotificationTopicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequiredInput">NumApprovalsRequiredInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNamesInput">PreApprovedServiceProviderActionNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIdsInput">ResourceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultIdInput">VaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyIdInput">VaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIds">DelegationSubscriptionIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenance">IsAutoApproveDuringMaintenance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormat">NotificationMessageFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicId">NotificationTopicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequired">NumApprovalsRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNames">PreApprovedServiceProviderActionNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIds">ResourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyId">VaultKeyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycleStateDetails"></a>

```go
func LifecycleStateDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeDeleted`<sup>Required</sup> <a name="TimeDeleted" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeDeleted"></a>

```go
func TimeDeleted() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeouts"></a>

```go
func Timeouts() DelegateAccessControlDelegationControlTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference">DelegateAccessControlDelegationControlTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DelegationSubscriptionIdsInput`<sup>Optional</sup> <a name="DelegationSubscriptionIdsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIdsInput"></a>

```go
func DelegationSubscriptionIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsAutoApproveDuringMaintenanceInput`<sup>Optional</sup> <a name="IsAutoApproveDuringMaintenanceInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenanceInput"></a>

```go
func IsAutoApproveDuringMaintenanceInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationMessageFormatInput`<sup>Optional</sup> <a name="NotificationMessageFormatInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormatInput"></a>

```go
func NotificationMessageFormatInput() *string
```

- *Type:* *string

---

##### `NotificationTopicIdInput`<sup>Optional</sup> <a name="NotificationTopicIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicIdInput"></a>

```go
func NotificationTopicIdInput() *string
```

- *Type:* *string

---

##### `NumApprovalsRequiredInput`<sup>Optional</sup> <a name="NumApprovalsRequiredInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequiredInput"></a>

```go
func NumApprovalsRequiredInput() *f64
```

- *Type:* *f64

---

##### `PreApprovedServiceProviderActionNamesInput`<sup>Optional</sup> <a name="PreApprovedServiceProviderActionNamesInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNamesInput"></a>

```go
func PreApprovedServiceProviderActionNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceIdsInput`<sup>Optional</sup> <a name="ResourceIdsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIdsInput"></a>

```go
func ResourceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultIdInput"></a>

```go
func VaultIdInput() *string
```

- *Type:* *string

---

##### `VaultKeyIdInput`<sup>Optional</sup> <a name="VaultKeyIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyIdInput"></a>

```go
func VaultKeyIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DelegationSubscriptionIds`<sup>Required</sup> <a name="DelegationSubscriptionIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIds"></a>

```go
func DelegationSubscriptionIds() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAutoApproveDuringMaintenance`<sup>Required</sup> <a name="IsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenance"></a>

```go
func IsAutoApproveDuringMaintenance() interface{}
```

- *Type:* interface{}

---

##### `NotificationMessageFormat`<sup>Required</sup> <a name="NotificationMessageFormat" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormat"></a>

```go
func NotificationMessageFormat() *string
```

- *Type:* *string

---

##### `NotificationTopicId`<sup>Required</sup> <a name="NotificationTopicId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicId"></a>

```go
func NotificationTopicId() *string
```

- *Type:* *string

---

##### `NumApprovalsRequired`<sup>Required</sup> <a name="NumApprovalsRequired" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequired"></a>

```go
func NumApprovalsRequired() *f64
```

- *Type:* *f64

---

##### `PreApprovedServiceProviderActionNames`<sup>Required</sup> <a name="PreApprovedServiceProviderActionNames" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNames"></a>

```go
func PreApprovedServiceProviderActionNames() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIds"></a>

```go
func ResourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `VaultKeyId`<sup>Required</sup> <a name="VaultKeyId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyId"></a>

```go
func VaultKeyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DelegateAccessControlDelegationControlConfig <a name="DelegateAccessControlDelegationControlConfig" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/delegateaccesscontroldelegationcontrol"

&delegateaccesscontroldelegationcontrol.DelegateAccessControlDelegationControlConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DelegationSubscriptionIds: *[]*string,
	DisplayName: *string,
	NotificationMessageFormat: *string,
	NotificationTopicId: *string,
	ResourceIds: *[]*string,
	ResourceType: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsAutoApproveDuringMaintenance: interface{},
	NumApprovalsRequired: *f64,
	PreApprovedServiceProviderActionNames: *[]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts,
	VaultId: *string,
	VaultKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#compartment_id DelegateAccessControlDelegationControl#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.delegationSubscriptionIds">DelegationSubscriptionIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delegation_subscription_ids DelegateAccessControlDelegationControl#delegation_subscription_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#display_name DelegateAccessControlDelegationControl#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationMessageFormat">NotificationMessageFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_message_format DelegateAccessControlDelegationControl#notification_message_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationTopicId">NotificationTopicId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_topic_id DelegateAccessControlDelegationControl#notification_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceIds">ResourceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_ids DelegateAccessControlDelegationControl#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_type DelegateAccessControlDelegationControl#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#defined_tags DelegateAccessControlDelegationControl#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#description DelegateAccessControlDelegationControl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#freeform_tags DelegateAccessControlDelegationControl#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#id DelegateAccessControlDelegationControl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.isAutoApproveDuringMaintenance">IsAutoApproveDuringMaintenance</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#is_auto_approve_during_maintenance DelegateAccessControlDelegationControl#is_auto_approve_during_maintenance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.numApprovalsRequired">NumApprovalsRequired</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#num_approvals_required DelegateAccessControlDelegationControl#num_approvals_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.preApprovedServiceProviderActionNames">PreApprovedServiceProviderActionNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#pre_approved_service_provider_action_names DelegateAccessControlDelegationControl#pre_approved_service_provider_action_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultId">VaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_id DelegateAccessControlDelegationControl#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultKeyId">VaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_key_id DelegateAccessControlDelegationControl#vault_key_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#compartment_id DelegateAccessControlDelegationControl#compartment_id}.

---

##### `DelegationSubscriptionIds`<sup>Required</sup> <a name="DelegationSubscriptionIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.delegationSubscriptionIds"></a>

```go
DelegationSubscriptionIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delegation_subscription_ids DelegateAccessControlDelegationControl#delegation_subscription_ids}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#display_name DelegateAccessControlDelegationControl#display_name}.

---

##### `NotificationMessageFormat`<sup>Required</sup> <a name="NotificationMessageFormat" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationMessageFormat"></a>

```go
NotificationMessageFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_message_format DelegateAccessControlDelegationControl#notification_message_format}.

---

##### `NotificationTopicId`<sup>Required</sup> <a name="NotificationTopicId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationTopicId"></a>

```go
NotificationTopicId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_topic_id DelegateAccessControlDelegationControl#notification_topic_id}.

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceIds"></a>

```go
ResourceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_ids DelegateAccessControlDelegationControl#resource_ids}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_type DelegateAccessControlDelegationControl#resource_type}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#defined_tags DelegateAccessControlDelegationControl#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#description DelegateAccessControlDelegationControl#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#freeform_tags DelegateAccessControlDelegationControl#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#id DelegateAccessControlDelegationControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAutoApproveDuringMaintenance`<sup>Optional</sup> <a name="IsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.isAutoApproveDuringMaintenance"></a>

```go
IsAutoApproveDuringMaintenance interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#is_auto_approve_during_maintenance DelegateAccessControlDelegationControl#is_auto_approve_during_maintenance}.

---

##### `NumApprovalsRequired`<sup>Optional</sup> <a name="NumApprovalsRequired" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.numApprovalsRequired"></a>

```go
NumApprovalsRequired *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#num_approvals_required DelegateAccessControlDelegationControl#num_approvals_required}.

---

##### `PreApprovedServiceProviderActionNames`<sup>Optional</sup> <a name="PreApprovedServiceProviderActionNames" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.preApprovedServiceProviderActionNames"></a>

```go
PreApprovedServiceProviderActionNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#pre_approved_service_provider_action_names DelegateAccessControlDelegationControl#pre_approved_service_provider_action_names}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.timeouts"></a>

```go
Timeouts DelegateAccessControlDelegationControlTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#timeouts DelegateAccessControlDelegationControl#timeouts}

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultId"></a>

```go
VaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_id DelegateAccessControlDelegationControl#vault_id}.

---

##### `VaultKeyId`<sup>Optional</sup> <a name="VaultKeyId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultKeyId"></a>

```go
VaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_key_id DelegateAccessControlDelegationControl#vault_key_id}.

---

### DelegateAccessControlDelegationControlTimeouts <a name="DelegateAccessControlDelegationControlTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/delegateaccesscontroldelegationcontrol"

&delegateaccesscontroldelegationcontrol.DelegateAccessControlDelegationControlTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#create DelegateAccessControlDelegationControl#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delete DelegateAccessControlDelegationControl#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#update DelegateAccessControlDelegationControl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#create DelegateAccessControlDelegationControl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delete DelegateAccessControlDelegationControl#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#update DelegateAccessControlDelegationControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DelegateAccessControlDelegationControlTimeoutsOutputReference <a name="DelegateAccessControlDelegationControlTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/delegateaccesscontroldelegationcontrol"

delegateaccesscontroldelegationcontrol.NewDelegateAccessControlDelegationControlTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DelegateAccessControlDelegationControlTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



