# `wafWebAppFirewallPolicy` Submodule <a name="`wafWebAppFirewallPolicy` Submodule" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafWebAppFirewallPolicy <a name="WafWebAppFirewallPolicy" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy oci_waf_web_app_firewall_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicy(scope Construct, id *string, config WafWebAppFirewallPolicyConfig) WafWebAppFirewallPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig">WafWebAppFirewallPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig">WafWebAppFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestAccessControl">PutRequestAccessControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestProtection">PutRequestProtection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestRateLimiting">PutRequestRateLimiting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseAccessControl">PutResponseAccessControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseProtection">PutResponseProtection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestAccessControl">ResetRequestAccessControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestProtection">ResetRequestProtection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestRateLimiting">ResetRequestRateLimiting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetResponseAccessControl">ResetResponseAccessControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetResponseProtection">ResetResponseProtection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetSystemTags">ResetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putActions"></a>

```go
func PutActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestAccessControl` <a name="PutRequestAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestAccessControl"></a>

```go
func PutRequestAccessControl(value WafWebAppFirewallPolicyRequestAccessControl)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestAccessControl.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a>

---

##### `PutRequestProtection` <a name="PutRequestProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestProtection"></a>

```go
func PutRequestProtection(value WafWebAppFirewallPolicyRequestProtection)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestProtection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a>

---

##### `PutRequestRateLimiting` <a name="PutRequestRateLimiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestRateLimiting"></a>

```go
func PutRequestRateLimiting(value WafWebAppFirewallPolicyRequestRateLimiting)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestRateLimiting.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a>

---

##### `PutResponseAccessControl` <a name="PutResponseAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseAccessControl"></a>

```go
func PutResponseAccessControl(value WafWebAppFirewallPolicyResponseAccessControl)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseAccessControl.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a>

---

##### `PutResponseProtection` <a name="PutResponseProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseProtection"></a>

```go
func PutResponseProtection(value WafWebAppFirewallPolicyResponseProtection)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseProtection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putTimeouts"></a>

```go
func PutTimeouts(value WafWebAppFirewallPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts">WafWebAppFirewallPolicyTimeouts</a>

---

##### `ResetActions` <a name="ResetActions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetActions"></a>

```go
func ResetActions()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetRequestAccessControl` <a name="ResetRequestAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestAccessControl"></a>

```go
func ResetRequestAccessControl()
```

##### `ResetRequestProtection` <a name="ResetRequestProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestProtection"></a>

```go
func ResetRequestProtection()
```

##### `ResetRequestRateLimiting` <a name="ResetRequestRateLimiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestRateLimiting"></a>

```go
func ResetRequestRateLimiting()
```

##### `ResetResponseAccessControl` <a name="ResetResponseAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetResponseAccessControl"></a>

```go
func ResetResponseAccessControl()
```

##### `ResetResponseProtection` <a name="ResetResponseProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetResponseProtection"></a>

```go
func ResetResponseProtection()
```

##### `ResetSystemTags` <a name="ResetSystemTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetSystemTags"></a>

```go
func ResetSystemTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WafWebAppFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.WafWebAppFirewallPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.WafWebAppFirewallPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.WafWebAppFirewallPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.WafWebAppFirewallPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WafWebAppFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WafWebAppFirewallPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WafWebAppFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WafWebAppFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.actions">Actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList">WafWebAppFirewallPolicyActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestAccessControl">RequestAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference">WafWebAppFirewallPolicyRequestAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestProtection">RequestProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference">WafWebAppFirewallPolicyRequestProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestRateLimiting">RequestRateLimiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference">WafWebAppFirewallPolicyRequestRateLimitingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseAccessControl">ResponseAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference">WafWebAppFirewallPolicyResponseAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseProtection">ResponseProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference">WafWebAppFirewallPolicyResponseProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference">WafWebAppFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.actionsInput">ActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestAccessControlInput">RequestAccessControlInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestProtectionInput">RequestProtectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestRateLimitingInput">RequestRateLimitingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseAccessControlInput">ResponseAccessControlInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseProtectionInput">ResponseProtectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.systemTagsInput">SystemTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.systemTags">SystemTags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.actions"></a>

```go
func Actions() WafWebAppFirewallPolicyActionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList">WafWebAppFirewallPolicyActionsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `RequestAccessControl`<sup>Required</sup> <a name="RequestAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestAccessControl"></a>

```go
func RequestAccessControl() WafWebAppFirewallPolicyRequestAccessControlOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference">WafWebAppFirewallPolicyRequestAccessControlOutputReference</a>

---

##### `RequestProtection`<sup>Required</sup> <a name="RequestProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestProtection"></a>

```go
func RequestProtection() WafWebAppFirewallPolicyRequestProtectionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference">WafWebAppFirewallPolicyRequestProtectionOutputReference</a>

---

##### `RequestRateLimiting`<sup>Required</sup> <a name="RequestRateLimiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestRateLimiting"></a>

```go
func RequestRateLimiting() WafWebAppFirewallPolicyRequestRateLimitingOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference">WafWebAppFirewallPolicyRequestRateLimitingOutputReference</a>

---

##### `ResponseAccessControl`<sup>Required</sup> <a name="ResponseAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseAccessControl"></a>

```go
func ResponseAccessControl() WafWebAppFirewallPolicyResponseAccessControlOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference">WafWebAppFirewallPolicyResponseAccessControlOutputReference</a>

---

##### `ResponseProtection`<sup>Required</sup> <a name="ResponseProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseProtection"></a>

```go
func ResponseProtection() WafWebAppFirewallPolicyResponseProtectionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference">WafWebAppFirewallPolicyResponseProtectionOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeouts"></a>

```go
func Timeouts() WafWebAppFirewallPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference">WafWebAppFirewallPolicyTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.actionsInput"></a>

```go
func ActionsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RequestAccessControlInput`<sup>Optional</sup> <a name="RequestAccessControlInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestAccessControlInput"></a>

```go
func RequestAccessControlInput() WafWebAppFirewallPolicyRequestAccessControl
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a>

---

##### `RequestProtectionInput`<sup>Optional</sup> <a name="RequestProtectionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestProtectionInput"></a>

```go
func RequestProtectionInput() WafWebAppFirewallPolicyRequestProtection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a>

---

##### `RequestRateLimitingInput`<sup>Optional</sup> <a name="RequestRateLimitingInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestRateLimitingInput"></a>

```go
func RequestRateLimitingInput() WafWebAppFirewallPolicyRequestRateLimiting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a>

---

##### `ResponseAccessControlInput`<sup>Optional</sup> <a name="ResponseAccessControlInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseAccessControlInput"></a>

```go
func ResponseAccessControlInput() WafWebAppFirewallPolicyResponseAccessControl
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a>

---

##### `ResponseProtectionInput`<sup>Optional</sup> <a name="ResponseProtectionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseProtectionInput"></a>

```go
func ResponseProtectionInput() WafWebAppFirewallPolicyResponseProtection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a>

---

##### `SystemTagsInput`<sup>Optional</sup> <a name="SystemTagsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.systemTagsInput"></a>

```go
func SystemTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.systemTags"></a>

```go
func SystemTags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WafWebAppFirewallPolicyActions <a name="WafWebAppFirewallPolicyActions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyActions {
	Name: *string,
	Type: *string,
	Body: github.com/rhizo-co/cdktf-provider-oci-go/oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody,
	Code: *f64,
	Headers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.body">Body</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a></code> | body block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.code">Code</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#code WafWebAppFirewallPolicy#code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `Body`<sup>Optional</sup> <a name="Body" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.body"></a>

```go
Body WafWebAppFirewallPolicyActionsBody
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a>

body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body WafWebAppFirewallPolicy#body}

---

##### `Code`<sup>Optional</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.code"></a>

```go
Code *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#code WafWebAppFirewallPolicy#code}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#headers WafWebAppFirewallPolicy#headers}

---

### WafWebAppFirewallPolicyActionsBody <a name="WafWebAppFirewallPolicyActionsBody" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyActionsBody {
	Type: *string,
	Template: *string,
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.template">Template</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#template WafWebAppFirewallPolicy#template}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.text">Text</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#text WafWebAppFirewallPolicy#text}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `Template`<sup>Optional</sup> <a name="Template" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.template"></a>

```go
Template *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#template WafWebAppFirewallPolicy#template}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.text"></a>

```go
Text *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#text WafWebAppFirewallPolicy#text}.

---

### WafWebAppFirewallPolicyActionsHeaders <a name="WafWebAppFirewallPolicyActionsHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyActionsHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#value WafWebAppFirewallPolicy#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#value WafWebAppFirewallPolicy#value}.

---

### WafWebAppFirewallPolicyConfig <a name="WafWebAppFirewallPolicyConfig" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Actions: interface{},
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	RequestAccessControl: github.com/rhizo-co/cdktf-provider-oci-go/oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl,
	RequestProtection: github.com/rhizo-co/cdktf-provider-oci-go/oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection,
	RequestRateLimiting: github.com/rhizo-co/cdktf-provider-oci-go/oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting,
	ResponseAccessControl: github.com/rhizo-co/cdktf-provider-oci-go/oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl,
	ResponseProtection: github.com/rhizo-co/cdktf-provider-oci-go/oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection,
	SystemTags: *map[string]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#compartment_id WafWebAppFirewallPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.actions">Actions</a></code> | <code>interface{}</code> | actions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#defined_tags WafWebAppFirewallPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#display_name WafWebAppFirewallPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#freeform_tags WafWebAppFirewallPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#id WafWebAppFirewallPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestAccessControl">RequestAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a></code> | request_access_control block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestProtection">RequestProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a></code> | request_protection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestRateLimiting">RequestRateLimiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a></code> | request_rate_limiting block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.responseAccessControl">ResponseAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a></code> | response_access_control block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.responseProtection">ResponseProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a></code> | response_protection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.systemTags">SystemTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#system_tags WafWebAppFirewallPolicy#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts">WafWebAppFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#compartment_id WafWebAppFirewallPolicy#compartment_id}.

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.actions"></a>

```go
Actions interface{}
```

- *Type:* interface{}

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#actions WafWebAppFirewallPolicy#actions}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#defined_tags WafWebAppFirewallPolicy#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#display_name WafWebAppFirewallPolicy#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#freeform_tags WafWebAppFirewallPolicy#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#id WafWebAppFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RequestAccessControl`<sup>Optional</sup> <a name="RequestAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestAccessControl"></a>

```go
RequestAccessControl WafWebAppFirewallPolicyRequestAccessControl
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a>

request_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_access_control WafWebAppFirewallPolicy#request_access_control}

---

##### `RequestProtection`<sup>Optional</sup> <a name="RequestProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestProtection"></a>

```go
RequestProtection WafWebAppFirewallPolicyRequestProtection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a>

request_protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_protection WafWebAppFirewallPolicy#request_protection}

---

##### `RequestRateLimiting`<sup>Optional</sup> <a name="RequestRateLimiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestRateLimiting"></a>

```go
RequestRateLimiting WafWebAppFirewallPolicyRequestRateLimiting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a>

request_rate_limiting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_rate_limiting WafWebAppFirewallPolicy#request_rate_limiting}

---

##### `ResponseAccessControl`<sup>Optional</sup> <a name="ResponseAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.responseAccessControl"></a>

```go
ResponseAccessControl WafWebAppFirewallPolicyResponseAccessControl
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a>

response_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#response_access_control WafWebAppFirewallPolicy#response_access_control}

---

##### `ResponseProtection`<sup>Optional</sup> <a name="ResponseProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.responseProtection"></a>

```go
ResponseProtection WafWebAppFirewallPolicyResponseProtection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a>

response_protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#response_protection WafWebAppFirewallPolicy#response_protection}

---

##### `SystemTags`<sup>Optional</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.systemTags"></a>

```go
SystemTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#system_tags WafWebAppFirewallPolicy#system_tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.timeouts"></a>

```go
Timeouts WafWebAppFirewallPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts">WafWebAppFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#timeouts WafWebAppFirewallPolicy#timeouts}

---

### WafWebAppFirewallPolicyRequestAccessControl <a name="WafWebAppFirewallPolicyRequestAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyRequestAccessControl {
	DefaultActionName: *string,
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.property.defaultActionName">DefaultActionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#default_action_name WafWebAppFirewallPolicy#default_action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `DefaultActionName`<sup>Required</sup> <a name="DefaultActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.property.defaultActionName"></a>

```go
DefaultActionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#default_action_name WafWebAppFirewallPolicy#default_action_name}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyRequestAccessControlRules <a name="WafWebAppFirewallPolicyRequestAccessControlRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyRequestAccessControlRules {
	ActionName: *string,
	Name: *string,
	Type: *string,
	Condition: *string,
	ConditionLanguage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.actionName">ActionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.conditionLanguage">ConditionLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.actionName"></a>

```go
ActionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `ConditionLanguage`<sup>Optional</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.conditionLanguage"></a>

```go
ConditionLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

### WafWebAppFirewallPolicyRequestProtection <a name="WafWebAppFirewallPolicyRequestProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyRequestProtection {
	BodyInspectionSizeLimitExceededActionName: *string,
	BodyInspectionSizeLimitInBytes: *f64,
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.bodyInspectionSizeLimitExceededActionName">BodyInspectionSizeLimitExceededActionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_exceeded_action_name WafWebAppFirewallPolicy#body_inspection_size_limit_exceeded_action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.bodyInspectionSizeLimitInBytes">BodyInspectionSizeLimitInBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_in_bytes WafWebAppFirewallPolicy#body_inspection_size_limit_in_bytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `BodyInspectionSizeLimitExceededActionName`<sup>Optional</sup> <a name="BodyInspectionSizeLimitExceededActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.bodyInspectionSizeLimitExceededActionName"></a>

```go
BodyInspectionSizeLimitExceededActionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_exceeded_action_name WafWebAppFirewallPolicy#body_inspection_size_limit_exceeded_action_name}.

---

##### `BodyInspectionSizeLimitInBytes`<sup>Optional</sup> <a name="BodyInspectionSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.bodyInspectionSizeLimitInBytes"></a>

```go
BodyInspectionSizeLimitInBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_in_bytes WafWebAppFirewallPolicy#body_inspection_size_limit_in_bytes}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyRequestProtectionRules <a name="WafWebAppFirewallPolicyRequestProtectionRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyRequestProtectionRules {
	ActionName: *string,
	Name: *string,
	ProtectionCapabilities: interface{},
	Type: *string,
	Condition: *string,
	ConditionLanguage: *string,
	IsBodyInspectionEnabled: interface{},
	ProtectionCapabilitySettings: github.com/rhizo-co/cdktf-provider-oci-go/oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.actionName">ActionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.protectionCapabilities">ProtectionCapabilities</a></code> | <code>interface{}</code> | protection_capabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.conditionLanguage">ConditionLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.isBodyInspectionEnabled">IsBodyInspectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#is_body_inspection_enabled WafWebAppFirewallPolicy#is_body_inspection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.protectionCapabilitySettings">ProtectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a></code> | protection_capability_settings block. |

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.actionName"></a>

```go
ActionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `ProtectionCapabilities`<sup>Required</sup> <a name="ProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.protectionCapabilities"></a>

```go
ProtectionCapabilities interface{}
```

- *Type:* interface{}

protection_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#protection_capabilities WafWebAppFirewallPolicy#protection_capabilities}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `ConditionLanguage`<sup>Optional</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.conditionLanguage"></a>

```go
ConditionLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

##### `IsBodyInspectionEnabled`<sup>Optional</sup> <a name="IsBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.isBodyInspectionEnabled"></a>

```go
IsBodyInspectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#is_body_inspection_enabled WafWebAppFirewallPolicy#is_body_inspection_enabled}.

---

##### `ProtectionCapabilitySettings`<sup>Optional</sup> <a name="ProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.protectionCapabilitySettings"></a>

```go
ProtectionCapabilitySettings WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a>

protection_capability_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#protection_capability_settings WafWebAppFirewallPolicy#protection_capability_settings}

---

### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities {
	Key: *string,
	Version: *f64,
	ActionName: *string,
	CollaborativeActionThreshold: *f64,
	CollaborativeWeights: interface{},
	Exclusions: github.com/rhizo-co/cdktf-provider-oci-go/oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.version">Version</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#version WafWebAppFirewallPolicy#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.actionName">ActionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.collaborativeActionThreshold">CollaborativeActionThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_action_threshold WafWebAppFirewallPolicy#collaborative_action_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.collaborativeWeights">CollaborativeWeights</a></code> | <code>interface{}</code> | collaborative_weights block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.exclusions">Exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a></code> | exclusions block. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#version WafWebAppFirewallPolicy#version}.

---

##### `ActionName`<sup>Optional</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.actionName"></a>

```go
ActionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `CollaborativeActionThreshold`<sup>Optional</sup> <a name="CollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.collaborativeActionThreshold"></a>

```go
CollaborativeActionThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_action_threshold WafWebAppFirewallPolicy#collaborative_action_threshold}.

---

##### `CollaborativeWeights`<sup>Optional</sup> <a name="CollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.collaborativeWeights"></a>

```go
CollaborativeWeights interface{}
```

- *Type:* interface{}

collaborative_weights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_weights WafWebAppFirewallPolicy#collaborative_weights}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.exclusions"></a>

```go
Exclusions WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a>

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#exclusions WafWebAppFirewallPolicy#exclusions}

---

### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights {
	Key: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#weight WafWebAppFirewallPolicy#weight}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#weight WafWebAppFirewallPolicy#weight}.

---

### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions {
	Args: *[]*string,
	RequestCookies: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.property.args">Args</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.property.requestCookies">RequestCookies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}. |

---

##### `Args`<sup>Optional</sup> <a name="Args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}.

---

##### `RequestCookies`<sup>Optional</sup> <a name="RequestCookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.property.requestCookies"></a>

```go
RequestCookies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}.

---

### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings {
	AllowedHttpMethods: *[]*string,
	MaxHttpRequestHeaderLength: *f64,
	MaxHttpRequestHeaders: *f64,
	MaxNumberOfArguments: *f64,
	MaxSingleArgumentLength: *f64,
	MaxTotalArgumentLength: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaderLength">MaxHttpRequestHeaderLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaders">MaxHttpRequestHeaders</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxNumberOfArguments">MaxNumberOfArguments</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxSingleArgumentLength">MaxSingleArgumentLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxTotalArgumentLength">MaxTotalArgumentLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}. |

---

##### `AllowedHttpMethods`<sup>Optional</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.allowedHttpMethods"></a>

```go
AllowedHttpMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}.

---

##### `MaxHttpRequestHeaderLength`<sup>Optional</sup> <a name="MaxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaderLength"></a>

```go
MaxHttpRequestHeaderLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}.

---

##### `MaxHttpRequestHeaders`<sup>Optional</sup> <a name="MaxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaders"></a>

```go
MaxHttpRequestHeaders *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}.

---

##### `MaxNumberOfArguments`<sup>Optional</sup> <a name="MaxNumberOfArguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxNumberOfArguments"></a>

```go
MaxNumberOfArguments *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}.

---

##### `MaxSingleArgumentLength`<sup>Optional</sup> <a name="MaxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxSingleArgumentLength"></a>

```go
MaxSingleArgumentLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}.

---

##### `MaxTotalArgumentLength`<sup>Optional</sup> <a name="MaxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxTotalArgumentLength"></a>

```go
MaxTotalArgumentLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}.

---

### WafWebAppFirewallPolicyRequestRateLimiting <a name="WafWebAppFirewallPolicyRequestRateLimiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyRequestRateLimiting {
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyRequestRateLimitingRules <a name="WafWebAppFirewallPolicyRequestRateLimitingRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyRequestRateLimitingRules {
	ActionName: *string,
	Configurations: interface{},
	Name: *string,
	Type: *string,
	Condition: *string,
	ConditionLanguage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.actionName">ActionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.configurations">Configurations</a></code> | <code>interface{}</code> | configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.conditionLanguage">ConditionLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.actionName"></a>

```go
ActionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.configurations"></a>

```go
Configurations interface{}
```

- *Type:* interface{}

configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#configurations WafWebAppFirewallPolicy#configurations}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `ConditionLanguage`<sup>Optional</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.conditionLanguage"></a>

```go
ConditionLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

### WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations {
	PeriodInSeconds: *f64,
	RequestsLimit: *f64,
	ActionDurationInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.periodInSeconds">PeriodInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#period_in_seconds WafWebAppFirewallPolicy#period_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.requestsLimit">RequestsLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#requests_limit WafWebAppFirewallPolicy#requests_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.actionDurationInSeconds">ActionDurationInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_duration_in_seconds WafWebAppFirewallPolicy#action_duration_in_seconds}. |

---

##### `PeriodInSeconds`<sup>Required</sup> <a name="PeriodInSeconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.periodInSeconds"></a>

```go
PeriodInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#period_in_seconds WafWebAppFirewallPolicy#period_in_seconds}.

---

##### `RequestsLimit`<sup>Required</sup> <a name="RequestsLimit" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.requestsLimit"></a>

```go
RequestsLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#requests_limit WafWebAppFirewallPolicy#requests_limit}.

---

##### `ActionDurationInSeconds`<sup>Optional</sup> <a name="ActionDurationInSeconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.actionDurationInSeconds"></a>

```go
ActionDurationInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_duration_in_seconds WafWebAppFirewallPolicy#action_duration_in_seconds}.

---

### WafWebAppFirewallPolicyResponseAccessControl <a name="WafWebAppFirewallPolicyResponseAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyResponseAccessControl {
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyResponseAccessControlRules <a name="WafWebAppFirewallPolicyResponseAccessControlRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyResponseAccessControlRules {
	ActionName: *string,
	Name: *string,
	Type: *string,
	Condition: *string,
	ConditionLanguage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.actionName">ActionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.conditionLanguage">ConditionLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.actionName"></a>

```go
ActionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `ConditionLanguage`<sup>Optional</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.conditionLanguage"></a>

```go
ConditionLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

### WafWebAppFirewallPolicyResponseProtection <a name="WafWebAppFirewallPolicyResponseProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyResponseProtection {
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyResponseProtectionRules <a name="WafWebAppFirewallPolicyResponseProtectionRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyResponseProtectionRules {
	ActionName: *string,
	Name: *string,
	ProtectionCapabilities: interface{},
	Type: *string,
	Condition: *string,
	ConditionLanguage: *string,
	IsBodyInspectionEnabled: interface{},
	ProtectionCapabilitySettings: github.com/rhizo-co/cdktf-provider-oci-go/oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.actionName">ActionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.protectionCapabilities">ProtectionCapabilities</a></code> | <code>interface{}</code> | protection_capabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.conditionLanguage">ConditionLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.isBodyInspectionEnabled">IsBodyInspectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#is_body_inspection_enabled WafWebAppFirewallPolicy#is_body_inspection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.protectionCapabilitySettings">ProtectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a></code> | protection_capability_settings block. |

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.actionName"></a>

```go
ActionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `ProtectionCapabilities`<sup>Required</sup> <a name="ProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.protectionCapabilities"></a>

```go
ProtectionCapabilities interface{}
```

- *Type:* interface{}

protection_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#protection_capabilities WafWebAppFirewallPolicy#protection_capabilities}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `ConditionLanguage`<sup>Optional</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.conditionLanguage"></a>

```go
ConditionLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

##### `IsBodyInspectionEnabled`<sup>Optional</sup> <a name="IsBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.isBodyInspectionEnabled"></a>

```go
IsBodyInspectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#is_body_inspection_enabled WafWebAppFirewallPolicy#is_body_inspection_enabled}.

---

##### `ProtectionCapabilitySettings`<sup>Optional</sup> <a name="ProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.protectionCapabilitySettings"></a>

```go
ProtectionCapabilitySettings WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a>

protection_capability_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#protection_capability_settings WafWebAppFirewallPolicy#protection_capability_settings}

---

### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities {
	Key: *string,
	Version: *f64,
	ActionName: *string,
	CollaborativeActionThreshold: *f64,
	CollaborativeWeights: interface{},
	Exclusions: github.com/rhizo-co/cdktf-provider-oci-go/oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.version">Version</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#version WafWebAppFirewallPolicy#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.actionName">ActionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.collaborativeActionThreshold">CollaborativeActionThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_action_threshold WafWebAppFirewallPolicy#collaborative_action_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.collaborativeWeights">CollaborativeWeights</a></code> | <code>interface{}</code> | collaborative_weights block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.exclusions">Exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a></code> | exclusions block. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#version WafWebAppFirewallPolicy#version}.

---

##### `ActionName`<sup>Optional</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.actionName"></a>

```go
ActionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `CollaborativeActionThreshold`<sup>Optional</sup> <a name="CollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.collaborativeActionThreshold"></a>

```go
CollaborativeActionThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_action_threshold WafWebAppFirewallPolicy#collaborative_action_threshold}.

---

##### `CollaborativeWeights`<sup>Optional</sup> <a name="CollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.collaborativeWeights"></a>

```go
CollaborativeWeights interface{}
```

- *Type:* interface{}

collaborative_weights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_weights WafWebAppFirewallPolicy#collaborative_weights}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.exclusions"></a>

```go
Exclusions WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a>

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#exclusions WafWebAppFirewallPolicy#exclusions}

---

### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights {
	Key: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#weight WafWebAppFirewallPolicy#weight}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#weight WafWebAppFirewallPolicy#weight}.

---

### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions {
	Args: *[]*string,
	RequestCookies: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.property.args">Args</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.property.requestCookies">RequestCookies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}. |

---

##### `Args`<sup>Optional</sup> <a name="Args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}.

---

##### `RequestCookies`<sup>Optional</sup> <a name="RequestCookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.property.requestCookies"></a>

```go
RequestCookies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}.

---

### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings {
	AllowedHttpMethods: *[]*string,
	MaxHttpRequestHeaderLength: *f64,
	MaxHttpRequestHeaders: *f64,
	MaxNumberOfArguments: *f64,
	MaxSingleArgumentLength: *f64,
	MaxTotalArgumentLength: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaderLength">MaxHttpRequestHeaderLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaders">MaxHttpRequestHeaders</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxNumberOfArguments">MaxNumberOfArguments</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxSingleArgumentLength">MaxSingleArgumentLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxTotalArgumentLength">MaxTotalArgumentLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}. |

---

##### `AllowedHttpMethods`<sup>Optional</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.allowedHttpMethods"></a>

```go
AllowedHttpMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}.

---

##### `MaxHttpRequestHeaderLength`<sup>Optional</sup> <a name="MaxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaderLength"></a>

```go
MaxHttpRequestHeaderLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}.

---

##### `MaxHttpRequestHeaders`<sup>Optional</sup> <a name="MaxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaders"></a>

```go
MaxHttpRequestHeaders *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}.

---

##### `MaxNumberOfArguments`<sup>Optional</sup> <a name="MaxNumberOfArguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxNumberOfArguments"></a>

```go
MaxNumberOfArguments *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}.

---

##### `MaxSingleArgumentLength`<sup>Optional</sup> <a name="MaxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxSingleArgumentLength"></a>

```go
MaxSingleArgumentLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}.

---

##### `MaxTotalArgumentLength`<sup>Optional</sup> <a name="MaxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxTotalArgumentLength"></a>

```go
MaxTotalArgumentLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}.

---

### WafWebAppFirewallPolicyTimeouts <a name="WafWebAppFirewallPolicyTimeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

&wafwebappfirewallpolicy.WafWebAppFirewallPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#create WafWebAppFirewallPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#delete WafWebAppFirewallPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#update WafWebAppFirewallPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#create WafWebAppFirewallPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#delete WafWebAppFirewallPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#update WafWebAppFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafWebAppFirewallPolicyActionsBodyOutputReference <a name="WafWebAppFirewallPolicyActionsBodyOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyActionsBodyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafWebAppFirewallPolicyActionsBodyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resetTemplate">ResetTemplate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTemplate` <a name="ResetTemplate" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resetTemplate"></a>

```go
func ResetTemplate()
```

##### `ResetText` <a name="ResetText" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.templateInput">TemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.template">Template</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.templateInput"></a>

```go
func TemplateInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Template`<sup>Required</sup> <a name="Template" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.template"></a>

```go
func Template() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.internalValue"></a>

```go
func InternalValue() WafWebAppFirewallPolicyActionsBody
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a>

---


### WafWebAppFirewallPolicyActionsHeadersList <a name="WafWebAppFirewallPolicyActionsHeadersList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyActionsHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafWebAppFirewallPolicyActionsHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.get"></a>

```go
func Get(index *f64) WafWebAppFirewallPolicyActionsHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyActionsHeadersOutputReference <a name="WafWebAppFirewallPolicyActionsHeadersOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyActionsHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafWebAppFirewallPolicyActionsHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyActionsList <a name="WafWebAppFirewallPolicyActionsList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafWebAppFirewallPolicyActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.get"></a>

```go
func Get(index *f64) WafWebAppFirewallPolicyActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyActionsOutputReference <a name="WafWebAppFirewallPolicyActionsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafWebAppFirewallPolicyActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putBody">PutBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBody` <a name="PutBody" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putBody"></a>

```go
func PutBody(value WafWebAppFirewallPolicyActionsBody)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putBody.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a>

---

##### `PutHeaders` <a name="PutHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBody` <a name="ResetBody" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetCode` <a name="ResetCode" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetCode"></a>

```go
func ResetCode()
```

##### `ResetHeaders` <a name="ResetHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.body">Body</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference">WafWebAppFirewallPolicyActionsBodyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.headers">Headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList">WafWebAppFirewallPolicyActionsHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.bodyInput">BodyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.codeInput">CodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.body"></a>

```go
func Body() WafWebAppFirewallPolicyActionsBodyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference">WafWebAppFirewallPolicyActionsBodyOutputReference</a>

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.headers"></a>

```go
func Headers() WafWebAppFirewallPolicyActionsHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList">WafWebAppFirewallPolicyActionsHeadersList</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.bodyInput"></a>

```go
func BodyInput() WafWebAppFirewallPolicyActionsBody
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a>

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.codeInput"></a>

```go
func CodeInput() *f64
```

- *Type:* *f64

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyRequestAccessControlOutputReference <a name="WafWebAppFirewallPolicyRequestAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestAccessControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafWebAppFirewallPolicyRequestAccessControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resetRules"></a>

```go
func ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList">WafWebAppFirewallPolicyRequestAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionNameInput">DefaultActionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionName">DefaultActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rules"></a>

```go
func Rules() WafWebAppFirewallPolicyRequestAccessControlRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList">WafWebAppFirewallPolicyRequestAccessControlRulesList</a>

---

##### `DefaultActionNameInput`<sup>Optional</sup> <a name="DefaultActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionNameInput"></a>

```go
func DefaultActionNameInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultActionName`<sup>Required</sup> <a name="DefaultActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionName"></a>

```go
func DefaultActionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.internalValue"></a>

```go
func InternalValue() WafWebAppFirewallPolicyRequestAccessControl
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a>

---


### WafWebAppFirewallPolicyRequestAccessControlRulesList <a name="WafWebAppFirewallPolicyRequestAccessControlRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestAccessControlRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafWebAppFirewallPolicyRequestAccessControlRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.get"></a>

```go
func Get(index *f64) WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference <a name="WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resetConditionLanguage">ResetConditionLanguage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetConditionLanguage` <a name="ResetConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resetConditionLanguage"></a>

```go
func ResetConditionLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguageInput">ConditionLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionName">ActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionNameInput"></a>

```go
func ActionNameInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `ConditionLanguageInput`<sup>Optional</sup> <a name="ConditionLanguageInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguageInput"></a>

```go
func ConditionLanguageInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionName"></a>

```go
func ActionName() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguage"></a>

```go
func ConditionLanguage() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyRequestProtectionOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestProtectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafWebAppFirewallPolicyRequestProtectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetBodyInspectionSizeLimitExceededActionName">ResetBodyInspectionSizeLimitExceededActionName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetBodyInspectionSizeLimitInBytes">ResetBodyInspectionSizeLimitInBytes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBodyInspectionSizeLimitExceededActionName` <a name="ResetBodyInspectionSizeLimitExceededActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetBodyInspectionSizeLimitExceededActionName"></a>

```go
func ResetBodyInspectionSizeLimitExceededActionName()
```

##### `ResetBodyInspectionSizeLimitInBytes` <a name="ResetBodyInspectionSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetBodyInspectionSizeLimitInBytes"></a>

```go
func ResetBodyInspectionSizeLimitInBytes()
```

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetRules"></a>

```go
func ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList">WafWebAppFirewallPolicyRequestProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionNameInput">BodyInspectionSizeLimitExceededActionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytesInput">BodyInspectionSizeLimitInBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName">BodyInspectionSizeLimitExceededActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes">BodyInspectionSizeLimitInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.rules"></a>

```go
func Rules() WafWebAppFirewallPolicyRequestProtectionRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList">WafWebAppFirewallPolicyRequestProtectionRulesList</a>

---

##### `BodyInspectionSizeLimitExceededActionNameInput`<sup>Optional</sup> <a name="BodyInspectionSizeLimitExceededActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionNameInput"></a>

```go
func BodyInspectionSizeLimitExceededActionNameInput() *string
```

- *Type:* *string

---

##### `BodyInspectionSizeLimitInBytesInput`<sup>Optional</sup> <a name="BodyInspectionSizeLimitInBytesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytesInput"></a>

```go
func BodyInspectionSizeLimitInBytesInput() *f64
```

- *Type:* *f64

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `BodyInspectionSizeLimitExceededActionName`<sup>Required</sup> <a name="BodyInspectionSizeLimitExceededActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName"></a>

```go
func BodyInspectionSizeLimitExceededActionName() *string
```

- *Type:* *string

---

##### `BodyInspectionSizeLimitInBytes`<sup>Required</sup> <a name="BodyInspectionSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes"></a>

```go
func BodyInspectionSizeLimitInBytes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.internalValue"></a>

```go
func InternalValue() WafWebAppFirewallPolicyRequestProtection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a>

---


### WafWebAppFirewallPolicyRequestProtectionRulesList <a name="WafWebAppFirewallPolicyRequestProtectionRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestProtectionRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafWebAppFirewallPolicyRequestProtectionRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.get"></a>

```go
func Get(index *f64) WafWebAppFirewallPolicyRequestProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyRequestProtectionRulesOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestProtectionRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafWebAppFirewallPolicyRequestProtectionRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilities">PutProtectionCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilitySettings">PutProtectionCapabilitySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetConditionLanguage">ResetConditionLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetIsBodyInspectionEnabled">ResetIsBodyInspectionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetProtectionCapabilitySettings">ResetProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProtectionCapabilities` <a name="PutProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilities"></a>

```go
func PutProtectionCapabilities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilities.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProtectionCapabilitySettings` <a name="PutProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilitySettings"></a>

```go
func PutProtectionCapabilitySettings(value WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a>

---

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetConditionLanguage` <a name="ResetConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetConditionLanguage"></a>

```go
func ResetConditionLanguage()
```

##### `ResetIsBodyInspectionEnabled` <a name="ResetIsBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetIsBodyInspectionEnabled"></a>

```go
func ResetIsBodyInspectionEnabled()
```

##### `ResetProtectionCapabilitySettings` <a name="ResetProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetProtectionCapabilitySettings"></a>

```go
func ResetProtectionCapabilitySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilities">ProtectionCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettings">ProtectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguageInput">ConditionLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabledInput">IsBodyInspectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitiesInput">ProtectionCapabilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettingsInput">ProtectionCapabilitySettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionName">ActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled">IsBodyInspectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProtectionCapabilities`<sup>Required</sup> <a name="ProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilities"></a>

```go
func ProtectionCapabilities() WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList</a>

---

##### `ProtectionCapabilitySettings`<sup>Required</sup> <a name="ProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```go
func ProtectionCapabilitySettings() WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference</a>

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionNameInput"></a>

```go
func ActionNameInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `ConditionLanguageInput`<sup>Optional</sup> <a name="ConditionLanguageInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguageInput"></a>

```go
func ConditionLanguageInput() *string
```

- *Type:* *string

---

##### `IsBodyInspectionEnabledInput`<sup>Optional</sup> <a name="IsBodyInspectionEnabledInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabledInput"></a>

```go
func IsBodyInspectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtectionCapabilitiesInput`<sup>Optional</sup> <a name="ProtectionCapabilitiesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitiesInput"></a>

```go
func ProtectionCapabilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `ProtectionCapabilitySettingsInput`<sup>Optional</sup> <a name="ProtectionCapabilitySettingsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettingsInput"></a>

```go
func ProtectionCapabilitySettingsInput() WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionName"></a>

```go
func ActionName() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguage"></a>

```go
func ConditionLanguage() *string
```

- *Type:* *string

---

##### `IsBodyInspectionEnabled`<sup>Required</sup> <a name="IsBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```go
func IsBodyInspectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```go
func Get(index *f64) WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetRequestCookies">ResetRequestCookies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetRequestCookies` <a name="ResetRequestCookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetRequestCookies"></a>

```go
func ResetRequestCookies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookiesInput">RequestCookiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">RequestCookies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequestCookiesInput`<sup>Optional</sup> <a name="RequestCookiesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookiesInput"></a>

```go
func RequestCookiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `RequestCookies`<sup>Required</sup> <a name="RequestCookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```go
func RequestCookies() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a>

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get"></a>

```go
func Get(index *f64) WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights">PutCollaborativeWeights</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putExclusions">PutExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetActionName">ResetActionName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeActionThreshold">ResetCollaborativeActionThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeWeights">ResetCollaborativeWeights</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCollaborativeWeights` <a name="PutCollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights"></a>

```go
func PutCollaborativeWeights(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExclusions` <a name="PutExclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putExclusions"></a>

```go
func PutExclusions(value WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putExclusions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a>

---

##### `ResetActionName` <a name="ResetActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetActionName"></a>

```go
func ResetActionName()
```

##### `ResetCollaborativeActionThreshold` <a name="ResetCollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeActionThreshold"></a>

```go
func ResetCollaborativeActionThreshold()
```

##### `ResetCollaborativeWeights` <a name="ResetCollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeWeights"></a>

```go
func ResetCollaborativeWeights()
```

##### `ResetExclusions` <a name="ResetExclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">CollaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">Exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThresholdInput">CollaborativeActionThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeightsInput">CollaborativeWeightsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">ActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">CollaborativeActionThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollaborativeWeights`<sup>Required</sup> <a name="CollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```go
func CollaborativeWeights() WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```go
func Exclusions() WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference</a>

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionNameInput"></a>

```go
func ActionNameInput() *string
```

- *Type:* *string

---

##### `CollaborativeActionThresholdInput`<sup>Optional</sup> <a name="CollaborativeActionThresholdInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThresholdInput"></a>

```go
func CollaborativeActionThresholdInput() *f64
```

- *Type:* *f64

---

##### `CollaborativeWeightsInput`<sup>Optional</sup> <a name="CollaborativeWeightsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeightsInput"></a>

```go
func CollaborativeWeightsInput() interface{}
```

- *Type:* interface{}

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```go
func ActionName() *string
```

- *Type:* *string

---

##### `CollaborativeActionThreshold`<sup>Required</sup> <a name="CollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```go
func CollaborativeActionThreshold() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetAllowedHttpMethods">ResetAllowedHttpMethods</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaderLength">ResetMaxHttpRequestHeaderLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaders">ResetMaxHttpRequestHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxNumberOfArguments">ResetMaxNumberOfArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxSingleArgumentLength">ResetMaxSingleArgumentLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxTotalArgumentLength">ResetMaxTotalArgumentLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedHttpMethods` <a name="ResetAllowedHttpMethods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetAllowedHttpMethods"></a>

```go
func ResetAllowedHttpMethods()
```

##### `ResetMaxHttpRequestHeaderLength` <a name="ResetMaxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaderLength"></a>

```go
func ResetMaxHttpRequestHeaderLength()
```

##### `ResetMaxHttpRequestHeaders` <a name="ResetMaxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaders"></a>

```go
func ResetMaxHttpRequestHeaders()
```

##### `ResetMaxNumberOfArguments` <a name="ResetMaxNumberOfArguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxNumberOfArguments"></a>

```go
func ResetMaxNumberOfArguments()
```

##### `ResetMaxSingleArgumentLength` <a name="ResetMaxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxSingleArgumentLength"></a>

```go
func ResetMaxSingleArgumentLength()
```

##### `ResetMaxTotalArgumentLength` <a name="ResetMaxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxTotalArgumentLength"></a>

```go
func ResetMaxTotalArgumentLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethodsInput">AllowedHttpMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLengthInput">MaxHttpRequestHeaderLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeadersInput">MaxHttpRequestHeadersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArgumentsInput">MaxNumberOfArgumentsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLengthInput">MaxSingleArgumentLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLengthInput">MaxTotalArgumentLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">MaxHttpRequestHeaderLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">MaxHttpRequestHeaders</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">MaxNumberOfArguments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">MaxSingleArgumentLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">MaxTotalArgumentLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedHttpMethodsInput`<sup>Optional</sup> <a name="AllowedHttpMethodsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethodsInput"></a>

```go
func AllowedHttpMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxHttpRequestHeaderLengthInput`<sup>Optional</sup> <a name="MaxHttpRequestHeaderLengthInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLengthInput"></a>

```go
func MaxHttpRequestHeaderLengthInput() *f64
```

- *Type:* *f64

---

##### `MaxHttpRequestHeadersInput`<sup>Optional</sup> <a name="MaxHttpRequestHeadersInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeadersInput"></a>

```go
func MaxHttpRequestHeadersInput() *f64
```

- *Type:* *f64

---

##### `MaxNumberOfArgumentsInput`<sup>Optional</sup> <a name="MaxNumberOfArgumentsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArgumentsInput"></a>

```go
func MaxNumberOfArgumentsInput() *f64
```

- *Type:* *f64

---

##### `MaxSingleArgumentLengthInput`<sup>Optional</sup> <a name="MaxSingleArgumentLengthInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLengthInput"></a>

```go
func MaxSingleArgumentLengthInput() *f64
```

- *Type:* *f64

---

##### `MaxTotalArgumentLengthInput`<sup>Optional</sup> <a name="MaxTotalArgumentLengthInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLengthInput"></a>

```go
func MaxTotalArgumentLengthInput() *f64
```

- *Type:* *f64

---

##### `AllowedHttpMethods`<sup>Required</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```go
func AllowedHttpMethods() *[]*string
```

- *Type:* *[]*string

---

##### `MaxHttpRequestHeaderLength`<sup>Required</sup> <a name="MaxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```go
func MaxHttpRequestHeaderLength() *f64
```

- *Type:* *f64

---

##### `MaxHttpRequestHeaders`<sup>Required</sup> <a name="MaxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```go
func MaxHttpRequestHeaders() *f64
```

- *Type:* *f64

---

##### `MaxNumberOfArguments`<sup>Required</sup> <a name="MaxNumberOfArguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```go
func MaxNumberOfArguments() *f64
```

- *Type:* *f64

---

##### `MaxSingleArgumentLength`<sup>Required</sup> <a name="MaxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```go
func MaxSingleArgumentLength() *f64
```

- *Type:* *f64

---

##### `MaxTotalArgumentLength`<sup>Required</sup> <a name="MaxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```go
func MaxTotalArgumentLength() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a>

---


### WafWebAppFirewallPolicyRequestRateLimitingOutputReference <a name="WafWebAppFirewallPolicyRequestRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestRateLimitingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafWebAppFirewallPolicyRequestRateLimitingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resetRules"></a>

```go
func ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList">WafWebAppFirewallPolicyRequestRateLimitingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rules"></a>

```go
func Rules() WafWebAppFirewallPolicyRequestRateLimitingRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList">WafWebAppFirewallPolicyRequestRateLimitingRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.internalValue"></a>

```go
func InternalValue() WafWebAppFirewallPolicyRequestRateLimiting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a>

---


### WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get"></a>

```go
func Get(index *f64) WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resetActionDurationInSeconds">ResetActionDurationInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionDurationInSeconds` <a name="ResetActionDurationInSeconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resetActionDurationInSeconds"></a>

```go
func ResetActionDurationInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSecondsInput">ActionDurationInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSecondsInput">PeriodInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimitInput">RequestsLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds">ActionDurationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds">PeriodInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit">RequestsLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionDurationInSecondsInput`<sup>Optional</sup> <a name="ActionDurationInSecondsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSecondsInput"></a>

```go
func ActionDurationInSecondsInput() *f64
```

- *Type:* *f64

---

##### `PeriodInSecondsInput`<sup>Optional</sup> <a name="PeriodInSecondsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSecondsInput"></a>

```go
func PeriodInSecondsInput() *f64
```

- *Type:* *f64

---

##### `RequestsLimitInput`<sup>Optional</sup> <a name="RequestsLimitInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimitInput"></a>

```go
func RequestsLimitInput() *f64
```

- *Type:* *f64

---

##### `ActionDurationInSeconds`<sup>Required</sup> <a name="ActionDurationInSeconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds"></a>

```go
func ActionDurationInSeconds() *f64
```

- *Type:* *f64

---

##### `PeriodInSeconds`<sup>Required</sup> <a name="PeriodInSeconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds"></a>

```go
func PeriodInSeconds() *f64
```

- *Type:* *f64

---

##### `RequestsLimit`<sup>Required</sup> <a name="RequestsLimit" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit"></a>

```go
func RequestsLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyRequestRateLimitingRulesList <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestRateLimitingRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafWebAppFirewallPolicyRequestRateLimitingRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.get"></a>

```go
func Get(index *f64) WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.putConfigurations">PutConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resetConditionLanguage">ResetConditionLanguage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurations` <a name="PutConfigurations" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.putConfigurations"></a>

```go
func PutConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.putConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetConditionLanguage` <a name="ResetConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resetConditionLanguage"></a>

```go
func ResetConditionLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguageInput">ConditionLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurationsInput">ConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionName">ActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurations"></a>

```go
func Configurations() WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList</a>

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionNameInput"></a>

```go
func ActionNameInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `ConditionLanguageInput`<sup>Optional</sup> <a name="ConditionLanguageInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguageInput"></a>

```go
func ConditionLanguageInput() *string
```

- *Type:* *string

---

##### `ConfigurationsInput`<sup>Optional</sup> <a name="ConfigurationsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurationsInput"></a>

```go
func ConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionName"></a>

```go
func ActionName() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguage"></a>

```go
func ConditionLanguage() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyResponseAccessControlOutputReference <a name="WafWebAppFirewallPolicyResponseAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyResponseAccessControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafWebAppFirewallPolicyResponseAccessControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resetRules"></a>

```go
func ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList">WafWebAppFirewallPolicyResponseAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rules"></a>

```go
func Rules() WafWebAppFirewallPolicyResponseAccessControlRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList">WafWebAppFirewallPolicyResponseAccessControlRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.internalValue"></a>

```go
func InternalValue() WafWebAppFirewallPolicyResponseAccessControl
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a>

---


### WafWebAppFirewallPolicyResponseAccessControlRulesList <a name="WafWebAppFirewallPolicyResponseAccessControlRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyResponseAccessControlRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafWebAppFirewallPolicyResponseAccessControlRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.get"></a>

```go
func Get(index *f64) WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference <a name="WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resetConditionLanguage">ResetConditionLanguage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetConditionLanguage` <a name="ResetConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resetConditionLanguage"></a>

```go
func ResetConditionLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguageInput">ConditionLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionName">ActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionNameInput"></a>

```go
func ActionNameInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `ConditionLanguageInput`<sup>Optional</sup> <a name="ConditionLanguageInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguageInput"></a>

```go
func ConditionLanguageInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionName"></a>

```go
func ActionName() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguage"></a>

```go
func ConditionLanguage() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyResponseProtectionOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyResponseProtectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafWebAppFirewallPolicyResponseProtectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resetRules"></a>

```go
func ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList">WafWebAppFirewallPolicyResponseProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.rules"></a>

```go
func Rules() WafWebAppFirewallPolicyResponseProtectionRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList">WafWebAppFirewallPolicyResponseProtectionRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.internalValue"></a>

```go
func InternalValue() WafWebAppFirewallPolicyResponseProtection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a>

---


### WafWebAppFirewallPolicyResponseProtectionRulesList <a name="WafWebAppFirewallPolicyResponseProtectionRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyResponseProtectionRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafWebAppFirewallPolicyResponseProtectionRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.get"></a>

```go
func Get(index *f64) WafWebAppFirewallPolicyResponseProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyResponseProtectionRulesOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyResponseProtectionRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafWebAppFirewallPolicyResponseProtectionRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilities">PutProtectionCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilitySettings">PutProtectionCapabilitySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetConditionLanguage">ResetConditionLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetIsBodyInspectionEnabled">ResetIsBodyInspectionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetProtectionCapabilitySettings">ResetProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProtectionCapabilities` <a name="PutProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilities"></a>

```go
func PutProtectionCapabilities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilities.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProtectionCapabilitySettings` <a name="PutProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilitySettings"></a>

```go
func PutProtectionCapabilitySettings(value WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a>

---

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetConditionLanguage` <a name="ResetConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetConditionLanguage"></a>

```go
func ResetConditionLanguage()
```

##### `ResetIsBodyInspectionEnabled` <a name="ResetIsBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetIsBodyInspectionEnabled"></a>

```go
func ResetIsBodyInspectionEnabled()
```

##### `ResetProtectionCapabilitySettings` <a name="ResetProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetProtectionCapabilitySettings"></a>

```go
func ResetProtectionCapabilitySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilities">ProtectionCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettings">ProtectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguageInput">ConditionLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabledInput">IsBodyInspectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitiesInput">ProtectionCapabilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettingsInput">ProtectionCapabilitySettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionName">ActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled">IsBodyInspectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProtectionCapabilities`<sup>Required</sup> <a name="ProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilities"></a>

```go
func ProtectionCapabilities() WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList</a>

---

##### `ProtectionCapabilitySettings`<sup>Required</sup> <a name="ProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```go
func ProtectionCapabilitySettings() WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference</a>

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionNameInput"></a>

```go
func ActionNameInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `ConditionLanguageInput`<sup>Optional</sup> <a name="ConditionLanguageInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguageInput"></a>

```go
func ConditionLanguageInput() *string
```

- *Type:* *string

---

##### `IsBodyInspectionEnabledInput`<sup>Optional</sup> <a name="IsBodyInspectionEnabledInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabledInput"></a>

```go
func IsBodyInspectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtectionCapabilitiesInput`<sup>Optional</sup> <a name="ProtectionCapabilitiesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitiesInput"></a>

```go
func ProtectionCapabilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `ProtectionCapabilitySettingsInput`<sup>Optional</sup> <a name="ProtectionCapabilitySettingsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettingsInput"></a>

```go
func ProtectionCapabilitySettingsInput() WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionName"></a>

```go
func ActionName() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguage"></a>

```go
func ConditionLanguage() *string
```

- *Type:* *string

---

##### `IsBodyInspectionEnabled`<sup>Required</sup> <a name="IsBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```go
func IsBodyInspectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```go
func Get(index *f64) WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetRequestCookies">ResetRequestCookies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetRequestCookies` <a name="ResetRequestCookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetRequestCookies"></a>

```go
func ResetRequestCookies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookiesInput">RequestCookiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">RequestCookies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequestCookiesInput`<sup>Optional</sup> <a name="RequestCookiesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookiesInput"></a>

```go
func RequestCookiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Args`<sup>Required</sup> <a name="Args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `RequestCookies`<sup>Required</sup> <a name="RequestCookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```go
func RequestCookies() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a>

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get"></a>

```go
func Get(index *f64) WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights">PutCollaborativeWeights</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putExclusions">PutExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetActionName">ResetActionName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeActionThreshold">ResetCollaborativeActionThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeWeights">ResetCollaborativeWeights</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCollaborativeWeights` <a name="PutCollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights"></a>

```go
func PutCollaborativeWeights(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExclusions` <a name="PutExclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putExclusions"></a>

```go
func PutExclusions(value WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putExclusions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a>

---

##### `ResetActionName` <a name="ResetActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetActionName"></a>

```go
func ResetActionName()
```

##### `ResetCollaborativeActionThreshold` <a name="ResetCollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeActionThreshold"></a>

```go
func ResetCollaborativeActionThreshold()
```

##### `ResetCollaborativeWeights` <a name="ResetCollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeWeights"></a>

```go
func ResetCollaborativeWeights()
```

##### `ResetExclusions` <a name="ResetExclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">CollaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">Exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThresholdInput">CollaborativeActionThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeightsInput">CollaborativeWeightsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">ActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">CollaborativeActionThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollaborativeWeights`<sup>Required</sup> <a name="CollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```go
func CollaborativeWeights() WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```go
func Exclusions() WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference</a>

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionNameInput"></a>

```go
func ActionNameInput() *string
```

- *Type:* *string

---

##### `CollaborativeActionThresholdInput`<sup>Optional</sup> <a name="CollaborativeActionThresholdInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThresholdInput"></a>

```go
func CollaborativeActionThresholdInput() *f64
```

- *Type:* *f64

---

##### `CollaborativeWeightsInput`<sup>Optional</sup> <a name="CollaborativeWeightsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeightsInput"></a>

```go
func CollaborativeWeightsInput() interface{}
```

- *Type:* interface{}

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```go
func ActionName() *string
```

- *Type:* *string

---

##### `CollaborativeActionThreshold`<sup>Required</sup> <a name="CollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```go
func CollaborativeActionThreshold() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetAllowedHttpMethods">ResetAllowedHttpMethods</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaderLength">ResetMaxHttpRequestHeaderLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaders">ResetMaxHttpRequestHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxNumberOfArguments">ResetMaxNumberOfArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxSingleArgumentLength">ResetMaxSingleArgumentLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxTotalArgumentLength">ResetMaxTotalArgumentLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedHttpMethods` <a name="ResetAllowedHttpMethods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetAllowedHttpMethods"></a>

```go
func ResetAllowedHttpMethods()
```

##### `ResetMaxHttpRequestHeaderLength` <a name="ResetMaxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaderLength"></a>

```go
func ResetMaxHttpRequestHeaderLength()
```

##### `ResetMaxHttpRequestHeaders` <a name="ResetMaxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaders"></a>

```go
func ResetMaxHttpRequestHeaders()
```

##### `ResetMaxNumberOfArguments` <a name="ResetMaxNumberOfArguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxNumberOfArguments"></a>

```go
func ResetMaxNumberOfArguments()
```

##### `ResetMaxSingleArgumentLength` <a name="ResetMaxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxSingleArgumentLength"></a>

```go
func ResetMaxSingleArgumentLength()
```

##### `ResetMaxTotalArgumentLength` <a name="ResetMaxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxTotalArgumentLength"></a>

```go
func ResetMaxTotalArgumentLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethodsInput">AllowedHttpMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLengthInput">MaxHttpRequestHeaderLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeadersInput">MaxHttpRequestHeadersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArgumentsInput">MaxNumberOfArgumentsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLengthInput">MaxSingleArgumentLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLengthInput">MaxTotalArgumentLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">MaxHttpRequestHeaderLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">MaxHttpRequestHeaders</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">MaxNumberOfArguments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">MaxSingleArgumentLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">MaxTotalArgumentLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedHttpMethodsInput`<sup>Optional</sup> <a name="AllowedHttpMethodsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethodsInput"></a>

```go
func AllowedHttpMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxHttpRequestHeaderLengthInput`<sup>Optional</sup> <a name="MaxHttpRequestHeaderLengthInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLengthInput"></a>

```go
func MaxHttpRequestHeaderLengthInput() *f64
```

- *Type:* *f64

---

##### `MaxHttpRequestHeadersInput`<sup>Optional</sup> <a name="MaxHttpRequestHeadersInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeadersInput"></a>

```go
func MaxHttpRequestHeadersInput() *f64
```

- *Type:* *f64

---

##### `MaxNumberOfArgumentsInput`<sup>Optional</sup> <a name="MaxNumberOfArgumentsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArgumentsInput"></a>

```go
func MaxNumberOfArgumentsInput() *f64
```

- *Type:* *f64

---

##### `MaxSingleArgumentLengthInput`<sup>Optional</sup> <a name="MaxSingleArgumentLengthInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLengthInput"></a>

```go
func MaxSingleArgumentLengthInput() *f64
```

- *Type:* *f64

---

##### `MaxTotalArgumentLengthInput`<sup>Optional</sup> <a name="MaxTotalArgumentLengthInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLengthInput"></a>

```go
func MaxTotalArgumentLengthInput() *f64
```

- *Type:* *f64

---

##### `AllowedHttpMethods`<sup>Required</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```go
func AllowedHttpMethods() *[]*string
```

- *Type:* *[]*string

---

##### `MaxHttpRequestHeaderLength`<sup>Required</sup> <a name="MaxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```go
func MaxHttpRequestHeaderLength() *f64
```

- *Type:* *f64

---

##### `MaxHttpRequestHeaders`<sup>Required</sup> <a name="MaxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```go
func MaxHttpRequestHeaders() *f64
```

- *Type:* *f64

---

##### `MaxNumberOfArguments`<sup>Required</sup> <a name="MaxNumberOfArguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```go
func MaxNumberOfArguments() *f64
```

- *Type:* *f64

---

##### `MaxSingleArgumentLength`<sup>Required</sup> <a name="MaxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```go
func MaxSingleArgumentLength() *f64
```

- *Type:* *f64

---

##### `MaxTotalArgumentLength`<sup>Required</sup> <a name="MaxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```go
func MaxTotalArgumentLength() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a>

---


### WafWebAppFirewallPolicyTimeoutsOutputReference <a name="WafWebAppFirewallPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/wafwebappfirewallpolicy"

wafwebappfirewallpolicy.NewWafWebAppFirewallPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafWebAppFirewallPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



