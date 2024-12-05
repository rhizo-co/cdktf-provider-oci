# `dataSafeSqlFirewallPolicy` Submodule <a name="`dataSafeSqlFirewallPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSqlFirewallPolicy <a name="DataSafeSqlFirewallPolicy" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy oci_data_safe_sql_firewall_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicy"

datasafesqlfirewallpolicy.NewDataSafeSqlFirewallPolicy(scope Construct, id *string, config DataSafeSqlFirewallPolicyConfig) DataSafeSqlFirewallPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig">DataSafeSqlFirewallPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig">DataSafeSqlFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientIps">ResetAllowedClientIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientOsUsernames">ResetAllowedClientOsUsernames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientPrograms">ResetAllowedClientPrograms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetEnforcementScope">ResetEnforcementScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetViolationAction">ResetViolationAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetViolationAudit">ResetViolationAudit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeSqlFirewallPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a>

---

##### `ResetAllowedClientIps` <a name="ResetAllowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientIps"></a>

```go
func ResetAllowedClientIps()
```

##### `ResetAllowedClientOsUsernames` <a name="ResetAllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientOsUsernames"></a>

```go
func ResetAllowedClientOsUsernames()
```

##### `ResetAllowedClientPrograms` <a name="ResetAllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientPrograms"></a>

```go
func ResetAllowedClientPrograms()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnforcementScope` <a name="ResetEnforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetEnforcementScope"></a>

```go
func ResetEnforcementScope()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetViolationAction` <a name="ResetViolationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetViolationAction"></a>

```go
func ResetViolationAction()
```

##### `ResetViolationAudit` <a name="ResetViolationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetViolationAudit"></a>

```go
func ResetViolationAudit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSqlFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicy"

datasafesqlfirewallpolicy.DataSafeSqlFirewallPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicy"

datasafesqlfirewallpolicy.DataSafeSqlFirewallPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicy"

datasafesqlfirewallpolicy.DataSafeSqlFirewallPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicy"

datasafesqlfirewallpolicy.DataSafeSqlFirewallPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeSqlFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeSqlFirewallPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeSqlFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSqlFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.dbUserName">DbUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.securityPolicyId">SecurityPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlLevel">SqlLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference">DataSafeSqlFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientIpsInput">AllowedClientIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientOsUsernamesInput">AllowedClientOsUsernamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientProgramsInput">AllowedClientProgramsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.enforcementScopeInput">EnforcementScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlFirewallPolicyIdInput">SqlFirewallPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationActionInput">ViolationActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAuditInput">ViolationAuditInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientIps">AllowedClientIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientOsUsernames">AllowedClientOsUsernames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientPrograms">AllowedClientPrograms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.enforcementScope">EnforcementScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlFirewallPolicyId">SqlFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAction">ViolationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAudit">ViolationAudit</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.dbUserName"></a>

```go
func DbUserName() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `SecurityPolicyId`<sup>Required</sup> <a name="SecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.securityPolicyId"></a>

```go
func SecurityPolicyId() *string
```

- *Type:* *string

---

##### `SqlLevel`<sup>Required</sup> <a name="SqlLevel" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlLevel"></a>

```go
func SqlLevel() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeouts"></a>

```go
func Timeouts() DataSafeSqlFirewallPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference">DataSafeSqlFirewallPolicyTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `AllowedClientIpsInput`<sup>Optional</sup> <a name="AllowedClientIpsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientIpsInput"></a>

```go
func AllowedClientIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClientOsUsernamesInput`<sup>Optional</sup> <a name="AllowedClientOsUsernamesInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientOsUsernamesInput"></a>

```go
func AllowedClientOsUsernamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClientProgramsInput`<sup>Optional</sup> <a name="AllowedClientProgramsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientProgramsInput"></a>

```go
func AllowedClientProgramsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnforcementScopeInput`<sup>Optional</sup> <a name="EnforcementScopeInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.enforcementScopeInput"></a>

```go
func EnforcementScopeInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SqlFirewallPolicyIdInput`<sup>Optional</sup> <a name="SqlFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlFirewallPolicyIdInput"></a>

```go
func SqlFirewallPolicyIdInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ViolationActionInput`<sup>Optional</sup> <a name="ViolationActionInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationActionInput"></a>

```go
func ViolationActionInput() *string
```

- *Type:* *string

---

##### `ViolationAuditInput`<sup>Optional</sup> <a name="ViolationAuditInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAuditInput"></a>

```go
func ViolationAuditInput() *string
```

- *Type:* *string

---

##### `AllowedClientIps`<sup>Required</sup> <a name="AllowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientIps"></a>

```go
func AllowedClientIps() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClientOsUsernames`<sup>Required</sup> <a name="AllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientOsUsernames"></a>

```go
func AllowedClientOsUsernames() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClientPrograms`<sup>Required</sup> <a name="AllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientPrograms"></a>

```go
func AllowedClientPrograms() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnforcementScope`<sup>Required</sup> <a name="EnforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.enforcementScope"></a>

```go
func EnforcementScope() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SqlFirewallPolicyId`<sup>Required</sup> <a name="SqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlFirewallPolicyId"></a>

```go
func SqlFirewallPolicyId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `ViolationAction`<sup>Required</sup> <a name="ViolationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAction"></a>

```go
func ViolationAction() *string
```

- *Type:* *string

---

##### `ViolationAudit`<sup>Required</sup> <a name="ViolationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAudit"></a>

```go
func ViolationAudit() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSqlFirewallPolicyConfig <a name="DataSafeSqlFirewallPolicyConfig" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicy"

&datasafesqlfirewallpolicy.DataSafeSqlFirewallPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SqlFirewallPolicyId: *string,
	AllowedClientIps: *[]*string,
	AllowedClientOsUsernames: *[]*string,
	AllowedClientPrograms: *[]*string,
	CompartmentId: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	EnforcementScope: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Status: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts,
	ViolationAction: *string,
	ViolationAudit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.sqlFirewallPolicyId">SqlFirewallPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#sql_firewall_policy_id DataSafeSqlFirewallPolicy#sql_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientIps">AllowedClientIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_ips DataSafeSqlFirewallPolicy#allowed_client_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientOsUsernames">AllowedClientOsUsernames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_os_usernames DataSafeSqlFirewallPolicy#allowed_client_os_usernames}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientPrograms">AllowedClientPrograms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_programs DataSafeSqlFirewallPolicy#allowed_client_programs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#compartment_id DataSafeSqlFirewallPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#defined_tags DataSafeSqlFirewallPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#description DataSafeSqlFirewallPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#display_name DataSafeSqlFirewallPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.enforcementScope">EnforcementScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#enforcement_scope DataSafeSqlFirewallPolicy#enforcement_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#freeform_tags DataSafeSqlFirewallPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#id DataSafeSqlFirewallPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#status DataSafeSqlFirewallPolicy#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.violationAction">ViolationAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_action DataSafeSqlFirewallPolicy#violation_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.violationAudit">ViolationAudit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_audit DataSafeSqlFirewallPolicy#violation_audit}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SqlFirewallPolicyId`<sup>Required</sup> <a name="SqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.sqlFirewallPolicyId"></a>

```go
SqlFirewallPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#sql_firewall_policy_id DataSafeSqlFirewallPolicy#sql_firewall_policy_id}.

---

##### `AllowedClientIps`<sup>Optional</sup> <a name="AllowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientIps"></a>

```go
AllowedClientIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_ips DataSafeSqlFirewallPolicy#allowed_client_ips}.

---

##### `AllowedClientOsUsernames`<sup>Optional</sup> <a name="AllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientOsUsernames"></a>

```go
AllowedClientOsUsernames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_os_usernames DataSafeSqlFirewallPolicy#allowed_client_os_usernames}.

---

##### `AllowedClientPrograms`<sup>Optional</sup> <a name="AllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientPrograms"></a>

```go
AllowedClientPrograms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_programs DataSafeSqlFirewallPolicy#allowed_client_programs}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#compartment_id DataSafeSqlFirewallPolicy#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#defined_tags DataSafeSqlFirewallPolicy#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#description DataSafeSqlFirewallPolicy#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#display_name DataSafeSqlFirewallPolicy#display_name}.

---

##### `EnforcementScope`<sup>Optional</sup> <a name="EnforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.enforcementScope"></a>

```go
EnforcementScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#enforcement_scope DataSafeSqlFirewallPolicy#enforcement_scope}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#freeform_tags DataSafeSqlFirewallPolicy#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#id DataSafeSqlFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#status DataSafeSqlFirewallPolicy#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.timeouts"></a>

```go
Timeouts DataSafeSqlFirewallPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#timeouts DataSafeSqlFirewallPolicy#timeouts}

---

##### `ViolationAction`<sup>Optional</sup> <a name="ViolationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.violationAction"></a>

```go
ViolationAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_action DataSafeSqlFirewallPolicy#violation_action}.

---

##### `ViolationAudit`<sup>Optional</sup> <a name="ViolationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.violationAudit"></a>

```go
ViolationAudit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_audit DataSafeSqlFirewallPolicy#violation_audit}.

---

### DataSafeSqlFirewallPolicyTimeouts <a name="DataSafeSqlFirewallPolicyTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicy"

&datasafesqlfirewallpolicy.DataSafeSqlFirewallPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#create DataSafeSqlFirewallPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#delete DataSafeSqlFirewallPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#update DataSafeSqlFirewallPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#create DataSafeSqlFirewallPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#delete DataSafeSqlFirewallPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#update DataSafeSqlFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSqlFirewallPolicyTimeoutsOutputReference <a name="DataSafeSqlFirewallPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesqlfirewallpolicy"

datasafesqlfirewallpolicy.NewDataSafeSqlFirewallPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeSqlFirewallPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



