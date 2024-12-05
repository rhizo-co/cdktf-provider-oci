# `dataSafeSqlFirewallPolicyManagement` Submodule <a name="`dataSafeSqlFirewallPolicyManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSqlFirewallPolicyManagement <a name="DataSafeSqlFirewallPolicyManagement" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management oci_data_safe_sql_firewall_policy_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicymanagement"

datasafesqlfirewallpolicymanagement.NewDataSafeSqlFirewallPolicyManagement(scope Construct, id *string, config DataSafeSqlFirewallPolicyManagementConfig) DataSafeSqlFirewallPolicyManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig">DataSafeSqlFirewallPolicyManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig">DataSafeSqlFirewallPolicyManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientIps">ResetAllowedClientIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientOsUsernames">ResetAllowedClientOsUsernames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientPrograms">ResetAllowedClientPrograms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDbUserName">ResetDbUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetEnforcementScope">ResetEnforcementScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetSqlFirewallPolicyId">ResetSqlFirewallPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAction">ResetViolationAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAudit">ResetViolationAudit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeSqlFirewallPolicyManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a>

---

##### `ResetAllowedClientIps` <a name="ResetAllowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientIps"></a>

```go
func ResetAllowedClientIps()
```

##### `ResetAllowedClientOsUsernames` <a name="ResetAllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientOsUsernames"></a>

```go
func ResetAllowedClientOsUsernames()
```

##### `ResetAllowedClientPrograms` <a name="ResetAllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientPrograms"></a>

```go
func ResetAllowedClientPrograms()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDbUserName` <a name="ResetDbUserName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDbUserName"></a>

```go
func ResetDbUserName()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnforcementScope` <a name="ResetEnforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetEnforcementScope"></a>

```go
func ResetEnforcementScope()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetSqlFirewallPolicyId` <a name="ResetSqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetSqlFirewallPolicyId"></a>

```go
func ResetSqlFirewallPolicyId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetState"></a>

```go
func ResetState()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTargetId"></a>

```go
func ResetTargetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetViolationAction` <a name="ResetViolationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAction"></a>

```go
func ResetViolationAction()
```

##### `ResetViolationAudit` <a name="ResetViolationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAudit"></a>

```go
func ResetViolationAudit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSqlFirewallPolicyManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicymanagement"

datasafesqlfirewallpolicymanagement.DataSafeSqlFirewallPolicyManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicymanagement"

datasafesqlfirewallpolicymanagement.DataSafeSqlFirewallPolicyManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicymanagement"

datasafesqlfirewallpolicymanagement.DataSafeSqlFirewallPolicyManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicymanagement"

datasafesqlfirewallpolicymanagement.DataSafeSqlFirewallPolicyManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeSqlFirewallPolicyManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeSqlFirewallPolicyManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeSqlFirewallPolicyManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSqlFirewallPolicyManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.securityPolicyId">SecurityPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlLevel">SqlLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference">DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIpsInput">AllowedClientIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernamesInput">AllowedClientOsUsernamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientProgramsInput">AllowedClientProgramsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserNameInput">DbUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScopeInput">EnforcementScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyIdInput">SqlFirewallPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationActionInput">ViolationActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAuditInput">ViolationAuditInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIps">AllowedClientIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernames">AllowedClientOsUsernames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientPrograms">AllowedClientPrograms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserName">DbUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScope">EnforcementScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyId">SqlFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAction">ViolationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAudit">ViolationAudit</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `SecurityPolicyId`<sup>Required</sup> <a name="SecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.securityPolicyId"></a>

```go
func SecurityPolicyId() *string
```

- *Type:* *string

---

##### `SqlLevel`<sup>Required</sup> <a name="SqlLevel" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlLevel"></a>

```go
func SqlLevel() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeouts"></a>

```go
func Timeouts() DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference">DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `AllowedClientIpsInput`<sup>Optional</sup> <a name="AllowedClientIpsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIpsInput"></a>

```go
func AllowedClientIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClientOsUsernamesInput`<sup>Optional</sup> <a name="AllowedClientOsUsernamesInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernamesInput"></a>

```go
func AllowedClientOsUsernamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClientProgramsInput`<sup>Optional</sup> <a name="AllowedClientProgramsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientProgramsInput"></a>

```go
func AllowedClientProgramsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DbUserNameInput`<sup>Optional</sup> <a name="DbUserNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserNameInput"></a>

```go
func DbUserNameInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnforcementScopeInput`<sup>Optional</sup> <a name="EnforcementScopeInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScopeInput"></a>

```go
func EnforcementScopeInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SqlFirewallPolicyIdInput`<sup>Optional</sup> <a name="SqlFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyIdInput"></a>

```go
func SqlFirewallPolicyIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ViolationActionInput`<sup>Optional</sup> <a name="ViolationActionInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationActionInput"></a>

```go
func ViolationActionInput() *string
```

- *Type:* *string

---

##### `ViolationAuditInput`<sup>Optional</sup> <a name="ViolationAuditInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAuditInput"></a>

```go
func ViolationAuditInput() *string
```

- *Type:* *string

---

##### `AllowedClientIps`<sup>Required</sup> <a name="AllowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIps"></a>

```go
func AllowedClientIps() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClientOsUsernames`<sup>Required</sup> <a name="AllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernames"></a>

```go
func AllowedClientOsUsernames() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClientPrograms`<sup>Required</sup> <a name="AllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientPrograms"></a>

```go
func AllowedClientPrograms() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserName"></a>

```go
func DbUserName() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnforcementScope`<sup>Required</sup> <a name="EnforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScope"></a>

```go
func EnforcementScope() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SqlFirewallPolicyId`<sup>Required</sup> <a name="SqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyId"></a>

```go
func SqlFirewallPolicyId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `ViolationAction`<sup>Required</sup> <a name="ViolationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAction"></a>

```go
func ViolationAction() *string
```

- *Type:* *string

---

##### `ViolationAudit`<sup>Required</sup> <a name="ViolationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAudit"></a>

```go
func ViolationAudit() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSqlFirewallPolicyManagementConfig <a name="DataSafeSqlFirewallPolicyManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicymanagement"

&datasafesqlfirewallpolicymanagement.DataSafeSqlFirewallPolicyManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllowedClientIps: *[]*string,
	AllowedClientOsUsernames: *[]*string,
	AllowedClientPrograms: *[]*string,
	CompartmentId: *string,
	DbUserName: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	EnforcementScope: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	SqlFirewallPolicyId: *string,
	State: *string,
	Status: *string,
	TargetId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts,
	ViolationAction: *string,
	ViolationAudit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientIps">AllowedClientIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_ips DataSafeSqlFirewallPolicyManagement#allowed_client_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientOsUsernames">AllowedClientOsUsernames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_os_usernames DataSafeSqlFirewallPolicyManagement#allowed_client_os_usernames}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientPrograms">AllowedClientPrograms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_programs DataSafeSqlFirewallPolicyManagement#allowed_client_programs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#compartment_id DataSafeSqlFirewallPolicyManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dbUserName">DbUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#db_user_name DataSafeSqlFirewallPolicyManagement#db_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#defined_tags DataSafeSqlFirewallPolicyManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#description DataSafeSqlFirewallPolicyManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#display_name DataSafeSqlFirewallPolicyManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.enforcementScope">EnforcementScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#enforcement_scope DataSafeSqlFirewallPolicyManagement#enforcement_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#freeform_tags DataSafeSqlFirewallPolicyManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#id DataSafeSqlFirewallPolicyManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.sqlFirewallPolicyId">SqlFirewallPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#sql_firewall_policy_id DataSafeSqlFirewallPolicyManagement#sql_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#state DataSafeSqlFirewallPolicyManagement#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#status DataSafeSqlFirewallPolicyManagement#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#target_id DataSafeSqlFirewallPolicyManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAction">ViolationAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_action DataSafeSqlFirewallPolicyManagement#violation_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAudit">ViolationAudit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_audit DataSafeSqlFirewallPolicyManagement#violation_audit}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedClientIps`<sup>Optional</sup> <a name="AllowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientIps"></a>

```go
AllowedClientIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_ips DataSafeSqlFirewallPolicyManagement#allowed_client_ips}.

---

##### `AllowedClientOsUsernames`<sup>Optional</sup> <a name="AllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientOsUsernames"></a>

```go
AllowedClientOsUsernames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_os_usernames DataSafeSqlFirewallPolicyManagement#allowed_client_os_usernames}.

---

##### `AllowedClientPrograms`<sup>Optional</sup> <a name="AllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientPrograms"></a>

```go
AllowedClientPrograms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_programs DataSafeSqlFirewallPolicyManagement#allowed_client_programs}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#compartment_id DataSafeSqlFirewallPolicyManagement#compartment_id}.

---

##### `DbUserName`<sup>Optional</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dbUserName"></a>

```go
DbUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#db_user_name DataSafeSqlFirewallPolicyManagement#db_user_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#defined_tags DataSafeSqlFirewallPolicyManagement#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#description DataSafeSqlFirewallPolicyManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#display_name DataSafeSqlFirewallPolicyManagement#display_name}.

---

##### `EnforcementScope`<sup>Optional</sup> <a name="EnforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.enforcementScope"></a>

```go
EnforcementScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#enforcement_scope DataSafeSqlFirewallPolicyManagement#enforcement_scope}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#freeform_tags DataSafeSqlFirewallPolicyManagement#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#id DataSafeSqlFirewallPolicyManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SqlFirewallPolicyId`<sup>Optional</sup> <a name="SqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.sqlFirewallPolicyId"></a>

```go
SqlFirewallPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#sql_firewall_policy_id DataSafeSqlFirewallPolicyManagement#sql_firewall_policy_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#state DataSafeSqlFirewallPolicyManagement#state}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#status DataSafeSqlFirewallPolicyManagement#status}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#target_id DataSafeSqlFirewallPolicyManagement#target_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.timeouts"></a>

```go
Timeouts DataSafeSqlFirewallPolicyManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#timeouts DataSafeSqlFirewallPolicyManagement#timeouts}

---

##### `ViolationAction`<sup>Optional</sup> <a name="ViolationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAction"></a>

```go
ViolationAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_action DataSafeSqlFirewallPolicyManagement#violation_action}.

---

##### `ViolationAudit`<sup>Optional</sup> <a name="ViolationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAudit"></a>

```go
ViolationAudit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_audit DataSafeSqlFirewallPolicyManagement#violation_audit}.

---

### DataSafeSqlFirewallPolicyManagementTimeouts <a name="DataSafeSqlFirewallPolicyManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicymanagement"

&datasafesqlfirewallpolicymanagement.DataSafeSqlFirewallPolicyManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#create DataSafeSqlFirewallPolicyManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#delete DataSafeSqlFirewallPolicyManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#update DataSafeSqlFirewallPolicyManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#create DataSafeSqlFirewallPolicyManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#delete DataSafeSqlFirewallPolicyManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#update DataSafeSqlFirewallPolicyManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference <a name="DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicymanagement"

datasafesqlfirewallpolicymanagement.NewDataSafeSqlFirewallPolicyManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



