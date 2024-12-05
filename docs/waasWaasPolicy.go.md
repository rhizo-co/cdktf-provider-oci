# `waasWaasPolicy` Submodule <a name="`waasWaasPolicy` Submodule" id="rhizo-co-terraform-provider-oci.waasWaasPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaasWaasPolicy <a name="WaasWaasPolicy" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy oci_waas_waas_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicy(scope Construct, id *string, config WaasWaasPolicyConfig) WaasWaasPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig">WaasWaasPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig">WaasWaasPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putOriginGroups">PutOriginGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putOrigins">PutOrigins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putPolicyConfig">PutPolicyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putWafConfig">PutWafConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetAdditionalDomains">ResetAdditionalDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetOriginGroups">ResetOriginGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetOrigins">ResetOrigins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetPolicyConfig">ResetPolicyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetWafConfig">ResetWafConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOriginGroups` <a name="PutOriginGroups" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putOriginGroups"></a>

```go
func PutOriginGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putOriginGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOrigins` <a name="PutOrigins" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putOrigins"></a>

```go
func PutOrigins(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putOrigins.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPolicyConfig` <a name="PutPolicyConfig" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putPolicyConfig"></a>

```go
func PutPolicyConfig(value WaasWaasPolicyPolicyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putPolicyConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig">WaasWaasPolicyPolicyConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putTimeouts"></a>

```go
func PutTimeouts(value WaasWaasPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeouts">WaasWaasPolicyTimeouts</a>

---

##### `PutWafConfig` <a name="PutWafConfig" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putWafConfig"></a>

```go
func PutWafConfig(value WaasWaasPolicyWafConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.putWafConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig">WaasWaasPolicyWafConfig</a>

---

##### `ResetAdditionalDomains` <a name="ResetAdditionalDomains" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetAdditionalDomains"></a>

```go
func ResetAdditionalDomains()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetOriginGroups` <a name="ResetOriginGroups" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetOriginGroups"></a>

```go
func ResetOriginGroups()
```

##### `ResetOrigins` <a name="ResetOrigins" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetOrigins"></a>

```go
func ResetOrigins()
```

##### `ResetPolicyConfig` <a name="ResetPolicyConfig" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetPolicyConfig"></a>

```go
func ResetPolicyConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWafConfig` <a name="ResetWafConfig" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.resetWafConfig"></a>

```go
func ResetWafConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WaasWaasPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.WaasWaasPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.WaasWaasPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.WaasWaasPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.WaasWaasPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WaasWaasPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WaasWaasPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WaasWaasPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WaasWaasPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.cname">Cname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.originGroups">OriginGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList">WaasWaasPolicyOriginGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.origins">Origins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList">WaasWaasPolicyOriginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.policyConfig">PolicyConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference">WaasWaasPolicyPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference">WaasWaasPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.wafConfig">WafConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference">WaasWaasPolicyWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.additionalDomainsInput">AdditionalDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.originGroupsInput">OriginGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.originsInput">OriginsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.policyConfigInput">PolicyConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig">WaasWaasPolicyPolicyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.wafConfigInput">WafConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig">WaasWaasPolicyWafConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.additionalDomains">AdditionalDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.cname"></a>

```go
func Cname() *string
```

- *Type:* *string

---

##### `OriginGroups`<sup>Required</sup> <a name="OriginGroups" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.originGroups"></a>

```go
func OriginGroups() WaasWaasPolicyOriginGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList">WaasWaasPolicyOriginGroupsList</a>

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.origins"></a>

```go
func Origins() WaasWaasPolicyOriginsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList">WaasWaasPolicyOriginsList</a>

---

##### `PolicyConfig`<sup>Required</sup> <a name="PolicyConfig" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.policyConfig"></a>

```go
func PolicyConfig() WaasWaasPolicyPolicyConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference">WaasWaasPolicyPolicyConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.timeouts"></a>

```go
func Timeouts() WaasWaasPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference">WaasWaasPolicyTimeoutsOutputReference</a>

---

##### `WafConfig`<sup>Required</sup> <a name="WafConfig" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.wafConfig"></a>

```go
func WafConfig() WaasWaasPolicyWafConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference">WaasWaasPolicyWafConfigOutputReference</a>

---

##### `AdditionalDomainsInput`<sup>Optional</sup> <a name="AdditionalDomainsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.additionalDomainsInput"></a>

```go
func AdditionalDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OriginGroupsInput`<sup>Optional</sup> <a name="OriginGroupsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.originGroupsInput"></a>

```go
func OriginGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `OriginsInput`<sup>Optional</sup> <a name="OriginsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.originsInput"></a>

```go
func OriginsInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyConfigInput`<sup>Optional</sup> <a name="PolicyConfigInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.policyConfigInput"></a>

```go
func PolicyConfigInput() WaasWaasPolicyPolicyConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig">WaasWaasPolicyPolicyConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WafConfigInput`<sup>Optional</sup> <a name="WafConfigInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.wafConfigInput"></a>

```go
func WafConfigInput() WaasWaasPolicyWafConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig">WaasWaasPolicyWafConfig</a>

---

##### `AdditionalDomains`<sup>Required</sup> <a name="AdditionalDomains" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.additionalDomains"></a>

```go
func AdditionalDomains() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WaasWaasPolicyConfig <a name="WaasWaasPolicyConfig" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Domain: *string,
	AdditionalDomains: *[]*string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	OriginGroups: interface{},
	Origins: interface{},
	PolicyConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyTimeouts,
	WafConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyWafConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#compartment_id WaasWaasPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#domain WaasWaasPolicy#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.additionalDomains">AdditionalDomains</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#additional_domains WaasWaasPolicy#additional_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#defined_tags WaasWaasPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#display_name WaasWaasPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#freeform_tags WaasWaasPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#id WaasWaasPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.originGroups">OriginGroups</a></code> | <code>interface{}</code> | origin_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.origins">Origins</a></code> | <code>interface{}</code> | origins block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.policyConfig">PolicyConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig">WaasWaasPolicyPolicyConfig</a></code> | policy_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeouts">WaasWaasPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.wafConfig">WafConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig">WaasWaasPolicyWafConfig</a></code> | waf_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#compartment_id WaasWaasPolicy#compartment_id}.

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#domain WaasWaasPolicy#domain}.

---

##### `AdditionalDomains`<sup>Optional</sup> <a name="AdditionalDomains" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.additionalDomains"></a>

```go
AdditionalDomains *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#additional_domains WaasWaasPolicy#additional_domains}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#defined_tags WaasWaasPolicy#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#display_name WaasWaasPolicy#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#freeform_tags WaasWaasPolicy#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#id WaasWaasPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OriginGroups`<sup>Optional</sup> <a name="OriginGroups" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.originGroups"></a>

```go
OriginGroups interface{}
```

- *Type:* interface{}

origin_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#origin_groups WaasWaasPolicy#origin_groups}

---

##### `Origins`<sup>Optional</sup> <a name="Origins" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.origins"></a>

```go
Origins interface{}
```

- *Type:* interface{}

origins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#origins WaasWaasPolicy#origins}

---

##### `PolicyConfig`<sup>Optional</sup> <a name="PolicyConfig" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.policyConfig"></a>

```go
PolicyConfig WaasWaasPolicyPolicyConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig">WaasWaasPolicyPolicyConfig</a>

policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#policy_config WaasWaasPolicy#policy_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.timeouts"></a>

```go
Timeouts WaasWaasPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeouts">WaasWaasPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#timeouts WaasWaasPolicy#timeouts}

---

##### `WafConfig`<sup>Optional</sup> <a name="WafConfig" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyConfig.property.wafConfig"></a>

```go
WafConfig WaasWaasPolicyWafConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig">WaasWaasPolicyWafConfig</a>

waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#waf_config WaasWaasPolicy#waf_config}

---

### WaasWaasPolicyOriginGroups <a name="WaasWaasPolicyOriginGroups" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyOriginGroups {
	Label: *string,
	OriginGroup: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroups.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#label WaasWaasPolicy#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroups.property.originGroup">OriginGroup</a></code> | <code>interface{}</code> | origin_group block. |

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroups.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#label WaasWaasPolicy#label}.

---

##### `OriginGroup`<sup>Required</sup> <a name="OriginGroup" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroups.property.originGroup"></a>

```go
OriginGroup interface{}
```

- *Type:* interface{}

origin_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#origin_group WaasWaasPolicy#origin_group}

---

### WaasWaasPolicyOriginGroupsOriginGroup <a name="WaasWaasPolicyOriginGroupsOriginGroup" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyOriginGroupsOriginGroup {
	Origin: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroup.property.origin">Origin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#origin WaasWaasPolicy#origin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroup.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#weight WaasWaasPolicy#weight}. |

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroup.property.origin"></a>

```go
Origin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#origin WaasWaasPolicy#origin}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroup.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#weight WaasWaasPolicy#weight}.

---

### WaasWaasPolicyOrigins <a name="WaasWaasPolicyOrigins" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOrigins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOrigins.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyOrigins {
	Label: *string,
	Uri: *string,
	CustomHeaders: interface{},
	HttpPort: *f64,
	HttpsPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOrigins.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#label WaasWaasPolicy#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOrigins.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#uri WaasWaasPolicy#uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOrigins.property.customHeaders">CustomHeaders</a></code> | <code>interface{}</code> | custom_headers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOrigins.property.httpPort">HttpPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#http_port WaasWaasPolicy#http_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOrigins.property.httpsPort">HttpsPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#https_port WaasWaasPolicy#https_port}. |

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOrigins.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#label WaasWaasPolicy#label}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOrigins.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#uri WaasWaasPolicy#uri}.

---

##### `CustomHeaders`<sup>Optional</sup> <a name="CustomHeaders" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOrigins.property.customHeaders"></a>

```go
CustomHeaders interface{}
```

- *Type:* interface{}

custom_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#custom_headers WaasWaasPolicy#custom_headers}

---

##### `HttpPort`<sup>Optional</sup> <a name="HttpPort" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOrigins.property.httpPort"></a>

```go
HttpPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#http_port WaasWaasPolicy#http_port}.

---

##### `HttpsPort`<sup>Optional</sup> <a name="HttpsPort" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOrigins.property.httpsPort"></a>

```go
HttpsPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#https_port WaasWaasPolicy#https_port}.

---

### WaasWaasPolicyOriginsCustomHeaders <a name="WaasWaasPolicyOriginsCustomHeaders" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeaders.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyOriginsCustomHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeaders.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeaders.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}.

---

### WaasWaasPolicyPolicyConfig <a name="WaasWaasPolicyPolicyConfig" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyPolicyConfig {
	CertificateId: *string,
	CipherGroup: *string,
	ClientAddressHeader: *string,
	HealthChecks: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks,
	IsBehindCdn: interface{},
	IsCacheControlRespected: interface{},
	IsHttpsEnabled: interface{},
	IsHttpsForced: interface{},
	IsOriginCompressionEnabled: interface{},
	IsResponseBufferingEnabled: interface{},
	IsSniEnabled: interface{},
	LoadBalancingMethod: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod,
	TlsProtocols: *[]*string,
	WebsocketPathPrefixes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.certificateId">CertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#certificate_id WaasWaasPolicy#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.cipherGroup">CipherGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#cipher_group WaasWaasPolicy#cipher_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.clientAddressHeader">ClientAddressHeader</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#client_address_header WaasWaasPolicy#client_address_header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.healthChecks">HealthChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks">WaasWaasPolicyPolicyConfigHealthChecks</a></code> | health_checks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.isBehindCdn">IsBehindCdn</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_behind_cdn WaasWaasPolicy#is_behind_cdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.isCacheControlRespected">IsCacheControlRespected</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_cache_control_respected WaasWaasPolicy#is_cache_control_respected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.isHttpsEnabled">IsHttpsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_https_enabled WaasWaasPolicy#is_https_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.isHttpsForced">IsHttpsForced</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_https_forced WaasWaasPolicy#is_https_forced}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.isOriginCompressionEnabled">IsOriginCompressionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_origin_compression_enabled WaasWaasPolicy#is_origin_compression_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.isResponseBufferingEnabled">IsResponseBufferingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_response_buffering_enabled WaasWaasPolicy#is_response_buffering_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.isSniEnabled">IsSniEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_sni_enabled WaasWaasPolicy#is_sni_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.loadBalancingMethod">LoadBalancingMethod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod">WaasWaasPolicyPolicyConfigLoadBalancingMethod</a></code> | load_balancing_method block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.tlsProtocols">TlsProtocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#tls_protocols WaasWaasPolicy#tls_protocols}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.websocketPathPrefixes">WebsocketPathPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#websocket_path_prefixes WaasWaasPolicy#websocket_path_prefixes}. |

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.certificateId"></a>

```go
CertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#certificate_id WaasWaasPolicy#certificate_id}.

---

##### `CipherGroup`<sup>Optional</sup> <a name="CipherGroup" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.cipherGroup"></a>

```go
CipherGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#cipher_group WaasWaasPolicy#cipher_group}.

---

##### `ClientAddressHeader`<sup>Optional</sup> <a name="ClientAddressHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.clientAddressHeader"></a>

```go
ClientAddressHeader *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#client_address_header WaasWaasPolicy#client_address_header}.

---

##### `HealthChecks`<sup>Optional</sup> <a name="HealthChecks" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.healthChecks"></a>

```go
HealthChecks WaasWaasPolicyPolicyConfigHealthChecks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks">WaasWaasPolicyPolicyConfigHealthChecks</a>

health_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#health_checks WaasWaasPolicy#health_checks}

---

##### `IsBehindCdn`<sup>Optional</sup> <a name="IsBehindCdn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.isBehindCdn"></a>

```go
IsBehindCdn interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_behind_cdn WaasWaasPolicy#is_behind_cdn}.

---

##### `IsCacheControlRespected`<sup>Optional</sup> <a name="IsCacheControlRespected" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.isCacheControlRespected"></a>

```go
IsCacheControlRespected interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_cache_control_respected WaasWaasPolicy#is_cache_control_respected}.

---

##### `IsHttpsEnabled`<sup>Optional</sup> <a name="IsHttpsEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.isHttpsEnabled"></a>

```go
IsHttpsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_https_enabled WaasWaasPolicy#is_https_enabled}.

---

##### `IsHttpsForced`<sup>Optional</sup> <a name="IsHttpsForced" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.isHttpsForced"></a>

```go
IsHttpsForced interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_https_forced WaasWaasPolicy#is_https_forced}.

---

##### `IsOriginCompressionEnabled`<sup>Optional</sup> <a name="IsOriginCompressionEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.isOriginCompressionEnabled"></a>

```go
IsOriginCompressionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_origin_compression_enabled WaasWaasPolicy#is_origin_compression_enabled}.

---

##### `IsResponseBufferingEnabled`<sup>Optional</sup> <a name="IsResponseBufferingEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.isResponseBufferingEnabled"></a>

```go
IsResponseBufferingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_response_buffering_enabled WaasWaasPolicy#is_response_buffering_enabled}.

---

##### `IsSniEnabled`<sup>Optional</sup> <a name="IsSniEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.isSniEnabled"></a>

```go
IsSniEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_sni_enabled WaasWaasPolicy#is_sni_enabled}.

---

##### `LoadBalancingMethod`<sup>Optional</sup> <a name="LoadBalancingMethod" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.loadBalancingMethod"></a>

```go
LoadBalancingMethod WaasWaasPolicyPolicyConfigLoadBalancingMethod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod">WaasWaasPolicyPolicyConfigLoadBalancingMethod</a>

load_balancing_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#load_balancing_method WaasWaasPolicy#load_balancing_method}

---

##### `TlsProtocols`<sup>Optional</sup> <a name="TlsProtocols" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.tlsProtocols"></a>

```go
TlsProtocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#tls_protocols WaasWaasPolicy#tls_protocols}.

---

##### `WebsocketPathPrefixes`<sup>Optional</sup> <a name="WebsocketPathPrefixes" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig.property.websocketPathPrefixes"></a>

```go
WebsocketPathPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#websocket_path_prefixes WaasWaasPolicy#websocket_path_prefixes}.

---

### WaasWaasPolicyPolicyConfigHealthChecks <a name="WaasWaasPolicyPolicyConfigHealthChecks" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyPolicyConfigHealthChecks {
	ExpectedResponseCodeGroup: *[]*string,
	ExpectedResponseText: *string,
	Headers: *map[string]*string,
	HealthyThreshold: *f64,
	IntervalInSeconds: *f64,
	IsEnabled: interface{},
	IsResponseTextCheckEnabled: interface{},
	Method: *string,
	Path: *string,
	TimeoutInSeconds: *f64,
	UnhealthyThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.expectedResponseCodeGroup">ExpectedResponseCodeGroup</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#expected_response_code_group WaasWaasPolicy#expected_response_code_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.expectedResponseText">ExpectedResponseText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#expected_response_text WaasWaasPolicy#expected_response_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.headers">Headers</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#headers WaasWaasPolicy#headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#healthy_threshold WaasWaasPolicy#healthy_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#interval_in_seconds WaasWaasPolicy#interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.isResponseTextCheckEnabled">IsResponseTextCheckEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_response_text_check_enabled WaasWaasPolicy#is_response_text_check_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.method">Method</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#method WaasWaasPolicy#method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#path WaasWaasPolicy#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#timeout_in_seconds WaasWaasPolicy#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#unhealthy_threshold WaasWaasPolicy#unhealthy_threshold}. |

---

##### `ExpectedResponseCodeGroup`<sup>Optional</sup> <a name="ExpectedResponseCodeGroup" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.expectedResponseCodeGroup"></a>

```go
ExpectedResponseCodeGroup *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#expected_response_code_group WaasWaasPolicy#expected_response_code_group}.

---

##### `ExpectedResponseText`<sup>Optional</sup> <a name="ExpectedResponseText" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.expectedResponseText"></a>

```go
ExpectedResponseText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#expected_response_text WaasWaasPolicy#expected_response_text}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.headers"></a>

```go
Headers *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#headers WaasWaasPolicy#headers}.

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.healthyThreshold"></a>

```go
HealthyThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#healthy_threshold WaasWaasPolicy#healthy_threshold}.

---

##### `IntervalInSeconds`<sup>Optional</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.intervalInSeconds"></a>

```go
IntervalInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#interval_in_seconds WaasWaasPolicy#interval_in_seconds}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}.

---

##### `IsResponseTextCheckEnabled`<sup>Optional</sup> <a name="IsResponseTextCheckEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.isResponseTextCheckEnabled"></a>

```go
IsResponseTextCheckEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_response_text_check_enabled WaasWaasPolicy#is_response_text_check_enabled}.

---

##### `Method`<sup>Optional</sup> <a name="Method" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.method"></a>

```go
Method *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#method WaasWaasPolicy#method}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#path WaasWaasPolicy#path}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#timeout_in_seconds WaasWaasPolicy#timeout_in_seconds}.

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks.property.unhealthyThreshold"></a>

```go
UnhealthyThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#unhealthy_threshold WaasWaasPolicy#unhealthy_threshold}.

---

### WaasWaasPolicyPolicyConfigLoadBalancingMethod <a name="WaasWaasPolicyPolicyConfigLoadBalancingMethod" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod {
	Method: *string,
	Domain: *string,
	ExpirationTimeInSeconds: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod.property.method">Method</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#method WaasWaasPolicy#method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#domain WaasWaasPolicy#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod.property.expirationTimeInSeconds">ExpirationTimeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#expiration_time_in_seconds WaasWaasPolicy#expiration_time_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}. |

---

##### `Method`<sup>Required</sup> <a name="Method" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod.property.method"></a>

```go
Method *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#method WaasWaasPolicy#method}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#domain WaasWaasPolicy#domain}.

---

##### `ExpirationTimeInSeconds`<sup>Optional</sup> <a name="ExpirationTimeInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod.property.expirationTimeInSeconds"></a>

```go
ExpirationTimeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#expiration_time_in_seconds WaasWaasPolicy#expiration_time_in_seconds}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}.

---

### WaasWaasPolicyTimeouts <a name="WaasWaasPolicyTimeouts" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#create WaasWaasPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#delete WaasWaasPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#update WaasWaasPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#create WaasWaasPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#delete WaasWaasPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#update WaasWaasPolicy#update}.

---

### WaasWaasPolicyWafConfig <a name="WaasWaasPolicyWafConfig" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfig {
	AccessRules: interface{},
	AddressRateLimiting: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting,
	CachingRules: interface{},
	Captchas: interface{},
	CustomProtectionRules: interface{},
	DeviceFingerprintChallenge: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge,
	HumanInteractionChallenge: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge,
	JsChallenge: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge,
	Origin: *string,
	OriginGroups: *[]*string,
	ProtectionSettings: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings,
	Whitelists: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.accessRules">AccessRules</a></code> | <code>interface{}</code> | access_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.addressRateLimiting">AddressRateLimiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting">WaasWaasPolicyWafConfigAddressRateLimiting</a></code> | address_rate_limiting block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.cachingRules">CachingRules</a></code> | <code>interface{}</code> | caching_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.captchas">Captchas</a></code> | <code>interface{}</code> | captchas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.customProtectionRules">CustomProtectionRules</a></code> | <code>interface{}</code> | custom_protection_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.deviceFingerprintChallenge">DeviceFingerprintChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge">WaasWaasPolicyWafConfigDeviceFingerprintChallenge</a></code> | device_fingerprint_challenge block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.humanInteractionChallenge">HumanInteractionChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge">WaasWaasPolicyWafConfigHumanInteractionChallenge</a></code> | human_interaction_challenge block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.jsChallenge">JsChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge">WaasWaasPolicyWafConfigJsChallenge</a></code> | js_challenge block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.origin">Origin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#origin WaasWaasPolicy#origin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.originGroups">OriginGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#origin_groups WaasWaasPolicy#origin_groups}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.protectionSettings">ProtectionSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings">WaasWaasPolicyWafConfigProtectionSettings</a></code> | protection_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.whitelists">Whitelists</a></code> | <code>interface{}</code> | whitelists block. |

---

##### `AccessRules`<sup>Optional</sup> <a name="AccessRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.accessRules"></a>

```go
AccessRules interface{}
```

- *Type:* interface{}

access_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#access_rules WaasWaasPolicy#access_rules}

---

##### `AddressRateLimiting`<sup>Optional</sup> <a name="AddressRateLimiting" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.addressRateLimiting"></a>

```go
AddressRateLimiting WaasWaasPolicyWafConfigAddressRateLimiting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting">WaasWaasPolicyWafConfigAddressRateLimiting</a>

address_rate_limiting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#address_rate_limiting WaasWaasPolicy#address_rate_limiting}

---

##### `CachingRules`<sup>Optional</sup> <a name="CachingRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.cachingRules"></a>

```go
CachingRules interface{}
```

- *Type:* interface{}

caching_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#caching_rules WaasWaasPolicy#caching_rules}

---

##### `Captchas`<sup>Optional</sup> <a name="Captchas" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.captchas"></a>

```go
Captchas interface{}
```

- *Type:* interface{}

captchas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captchas WaasWaasPolicy#captchas}

---

##### `CustomProtectionRules`<sup>Optional</sup> <a name="CustomProtectionRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.customProtectionRules"></a>

```go
CustomProtectionRules interface{}
```

- *Type:* interface{}

custom_protection_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#custom_protection_rules WaasWaasPolicy#custom_protection_rules}

---

##### `DeviceFingerprintChallenge`<sup>Optional</sup> <a name="DeviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.deviceFingerprintChallenge"></a>

```go
DeviceFingerprintChallenge WaasWaasPolicyWafConfigDeviceFingerprintChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge">WaasWaasPolicyWafConfigDeviceFingerprintChallenge</a>

device_fingerprint_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#device_fingerprint_challenge WaasWaasPolicy#device_fingerprint_challenge}

---

##### `HumanInteractionChallenge`<sup>Optional</sup> <a name="HumanInteractionChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.humanInteractionChallenge"></a>

```go
HumanInteractionChallenge WaasWaasPolicyWafConfigHumanInteractionChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge">WaasWaasPolicyWafConfigHumanInteractionChallenge</a>

human_interaction_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#human_interaction_challenge WaasWaasPolicy#human_interaction_challenge}

---

##### `JsChallenge`<sup>Optional</sup> <a name="JsChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.jsChallenge"></a>

```go
JsChallenge WaasWaasPolicyWafConfigJsChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge">WaasWaasPolicyWafConfigJsChallenge</a>

js_challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#js_challenge WaasWaasPolicy#js_challenge}

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.origin"></a>

```go
Origin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#origin WaasWaasPolicy#origin}.

---

##### `OriginGroups`<sup>Optional</sup> <a name="OriginGroups" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.originGroups"></a>

```go
OriginGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#origin_groups WaasWaasPolicy#origin_groups}.

---

##### `ProtectionSettings`<sup>Optional</sup> <a name="ProtectionSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.protectionSettings"></a>

```go
ProtectionSettings WaasWaasPolicyWafConfigProtectionSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings">WaasWaasPolicyWafConfigProtectionSettings</a>

protection_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#protection_settings WaasWaasPolicy#protection_settings}

---

##### `Whitelists`<sup>Optional</sup> <a name="Whitelists" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig.property.whitelists"></a>

```go
Whitelists interface{}
```

- *Type:* interface{}

whitelists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#whitelists WaasWaasPolicy#whitelists}

---

### WaasWaasPolicyWafConfigAccessRules <a name="WaasWaasPolicyWafConfigAccessRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigAccessRules {
	Action: *string,
	Criteria: interface{},
	Name: *string,
	BlockAction: *string,
	BlockErrorPageCode: *string,
	BlockErrorPageDescription: *string,
	BlockErrorPageMessage: *string,
	BlockResponseCode: *f64,
	BypassChallenges: *[]*string,
	CaptchaFooter: *string,
	CaptchaHeader: *string,
	CaptchaSubmitLabel: *string,
	CaptchaTitle: *string,
	RedirectResponseCode: *string,
	RedirectUrl: *string,
	ResponseHeaderManipulation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.criteria">Criteria</a></code> | <code>interface{}</code> | criteria block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.blockAction">BlockAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.bypassChallenges">BypassChallenges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#bypass_challenges WaasWaasPolicy#bypass_challenges}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.captchaFooter">CaptchaFooter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_footer WaasWaasPolicy#captcha_footer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.captchaHeader">CaptchaHeader</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_header WaasWaasPolicy#captcha_header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_submit_label WaasWaasPolicy#captcha_submit_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.captchaTitle">CaptchaTitle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_title WaasWaasPolicy#captcha_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.redirectResponseCode">RedirectResponseCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#redirect_response_code WaasWaasPolicy#redirect_response_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#redirect_url WaasWaasPolicy#redirect_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.responseHeaderManipulation">ResponseHeaderManipulation</a></code> | <code>interface{}</code> | response_header_manipulation block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}.

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.criteria"></a>

```go
Criteria interface{}
```

- *Type:* interface{}

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#criteria WaasWaasPolicy#criteria}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}.

---

##### `BlockAction`<sup>Optional</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.blockAction"></a>

```go
BlockAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}.

---

##### `BlockErrorPageCode`<sup>Optional</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.blockErrorPageCode"></a>

```go
BlockErrorPageCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}.

---

##### `BlockErrorPageDescription`<sup>Optional</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.blockErrorPageDescription"></a>

```go
BlockErrorPageDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}.

---

##### `BlockErrorPageMessage`<sup>Optional</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.blockErrorPageMessage"></a>

```go
BlockErrorPageMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}.

---

##### `BlockResponseCode`<sup>Optional</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.blockResponseCode"></a>

```go
BlockResponseCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}.

---

##### `BypassChallenges`<sup>Optional</sup> <a name="BypassChallenges" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.bypassChallenges"></a>

```go
BypassChallenges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#bypass_challenges WaasWaasPolicy#bypass_challenges}.

---

##### `CaptchaFooter`<sup>Optional</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.captchaFooter"></a>

```go
CaptchaFooter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_footer WaasWaasPolicy#captcha_footer}.

---

##### `CaptchaHeader`<sup>Optional</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.captchaHeader"></a>

```go
CaptchaHeader *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_header WaasWaasPolicy#captcha_header}.

---

##### `CaptchaSubmitLabel`<sup>Optional</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.captchaSubmitLabel"></a>

```go
CaptchaSubmitLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_submit_label WaasWaasPolicy#captcha_submit_label}.

---

##### `CaptchaTitle`<sup>Optional</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.captchaTitle"></a>

```go
CaptchaTitle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_title WaasWaasPolicy#captcha_title}.

---

##### `RedirectResponseCode`<sup>Optional</sup> <a name="RedirectResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.redirectResponseCode"></a>

```go
RedirectResponseCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#redirect_response_code WaasWaasPolicy#redirect_response_code}.

---

##### `RedirectUrl`<sup>Optional</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.redirectUrl"></a>

```go
RedirectUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#redirect_url WaasWaasPolicy#redirect_url}.

---

##### `ResponseHeaderManipulation`<sup>Optional</sup> <a name="ResponseHeaderManipulation" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRules.property.responseHeaderManipulation"></a>

```go
ResponseHeaderManipulation interface{}
```

- *Type:* interface{}

response_header_manipulation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#response_header_manipulation WaasWaasPolicy#response_header_manipulation}

---

### WaasWaasPolicyWafConfigAccessRulesCriteria <a name="WaasWaasPolicyWafConfigAccessRulesCriteria" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteria.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigAccessRulesCriteria {
	Condition: *string,
	Value: *string,
	IsCaseSensitive: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteria.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#condition WaasWaasPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteria.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteria.property.isCaseSensitive">IsCaseSensitive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_case_sensitive WaasWaasPolicy#is_case_sensitive}. |

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteria.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#condition WaasWaasPolicy#condition}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteria.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}.

---

##### `IsCaseSensitive`<sup>Optional</sup> <a name="IsCaseSensitive" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteria.property.isCaseSensitive"></a>

```go
IsCaseSensitive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_case_sensitive WaasWaasPolicy#is_case_sensitive}.

---

### WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation <a name="WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation {
	Action: *string,
	Header: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation.property.header">Header</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#header WaasWaasPolicy#header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}.

---

##### `Header`<sup>Required</sup> <a name="Header" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation.property.header"></a>

```go
Header *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#header WaasWaasPolicy#header}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}.

---

### WaasWaasPolicyWafConfigAddressRateLimiting <a name="WaasWaasPolicyWafConfigAddressRateLimiting" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigAddressRateLimiting {
	IsEnabled: interface{},
	AllowedRatePerAddress: *f64,
	BlockResponseCode: *f64,
	MaxDelayedCountPerAddress: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting.property.allowedRatePerAddress">AllowedRatePerAddress</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#allowed_rate_per_address WaasWaasPolicy#allowed_rate_per_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting.property.maxDelayedCountPerAddress">MaxDelayedCountPerAddress</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#max_delayed_count_per_address WaasWaasPolicy#max_delayed_count_per_address}. |

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}.

---

##### `AllowedRatePerAddress`<sup>Optional</sup> <a name="AllowedRatePerAddress" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting.property.allowedRatePerAddress"></a>

```go
AllowedRatePerAddress *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#allowed_rate_per_address WaasWaasPolicy#allowed_rate_per_address}.

---

##### `BlockResponseCode`<sup>Optional</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting.property.blockResponseCode"></a>

```go
BlockResponseCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}.

---

##### `MaxDelayedCountPerAddress`<sup>Optional</sup> <a name="MaxDelayedCountPerAddress" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting.property.maxDelayedCountPerAddress"></a>

```go
MaxDelayedCountPerAddress *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#max_delayed_count_per_address WaasWaasPolicy#max_delayed_count_per_address}.

---

### WaasWaasPolicyWafConfigCachingRules <a name="WaasWaasPolicyWafConfigCachingRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigCachingRules {
	Action: *string,
	Criteria: interface{},
	Name: *string,
	CachingDuration: *string,
	ClientCachingDuration: *string,
	IsClientCachingEnabled: interface{},
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.property.criteria">Criteria</a></code> | <code>interface{}</code> | criteria block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.property.cachingDuration">CachingDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#caching_duration WaasWaasPolicy#caching_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.property.clientCachingDuration">ClientCachingDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#client_caching_duration WaasWaasPolicy#client_caching_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.property.isClientCachingEnabled">IsClientCachingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_client_caching_enabled WaasWaasPolicy#is_client_caching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#key WaasWaasPolicy#key}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}.

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.property.criteria"></a>

```go
Criteria interface{}
```

- *Type:* interface{}

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#criteria WaasWaasPolicy#criteria}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}.

---

##### `CachingDuration`<sup>Optional</sup> <a name="CachingDuration" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.property.cachingDuration"></a>

```go
CachingDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#caching_duration WaasWaasPolicy#caching_duration}.

---

##### `ClientCachingDuration`<sup>Optional</sup> <a name="ClientCachingDuration" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.property.clientCachingDuration"></a>

```go
ClientCachingDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#client_caching_duration WaasWaasPolicy#client_caching_duration}.

---

##### `IsClientCachingEnabled`<sup>Optional</sup> <a name="IsClientCachingEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.property.isClientCachingEnabled"></a>

```go
IsClientCachingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_client_caching_enabled WaasWaasPolicy#is_client_caching_enabled}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRules.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#key WaasWaasPolicy#key}.

---

### WaasWaasPolicyWafConfigCachingRulesCriteria <a name="WaasWaasPolicyWafConfigCachingRulesCriteria" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteria.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigCachingRulesCriteria {
	Condition: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteria.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#condition WaasWaasPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteria.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}. |

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteria.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#condition WaasWaasPolicy#condition}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteria.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}.

---

### WaasWaasPolicyWafConfigCaptchas <a name="WaasWaasPolicyWafConfigCaptchas" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigCaptchas {
	FailureMessage: *string,
	SessionExpirationInSeconds: *f64,
	SubmitLabel: *string,
	Title: *string,
	Url: *string,
	FooterText: *string,
	HeaderText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.property.failureMessage">FailureMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#failure_message WaasWaasPolicy#failure_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.property.sessionExpirationInSeconds">SessionExpirationInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#session_expiration_in_seconds WaasWaasPolicy#session_expiration_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.property.submitLabel">SubmitLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#submit_label WaasWaasPolicy#submit_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#title WaasWaasPolicy#title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#url WaasWaasPolicy#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.property.footerText">FooterText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#footer_text WaasWaasPolicy#footer_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.property.headerText">HeaderText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#header_text WaasWaasPolicy#header_text}. |

---

##### `FailureMessage`<sup>Required</sup> <a name="FailureMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.property.failureMessage"></a>

```go
FailureMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#failure_message WaasWaasPolicy#failure_message}.

---

##### `SessionExpirationInSeconds`<sup>Required</sup> <a name="SessionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.property.sessionExpirationInSeconds"></a>

```go
SessionExpirationInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#session_expiration_in_seconds WaasWaasPolicy#session_expiration_in_seconds}.

---

##### `SubmitLabel`<sup>Required</sup> <a name="SubmitLabel" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.property.submitLabel"></a>

```go
SubmitLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#submit_label WaasWaasPolicy#submit_label}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#title WaasWaasPolicy#title}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#url WaasWaasPolicy#url}.

---

##### `FooterText`<sup>Optional</sup> <a name="FooterText" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.property.footerText"></a>

```go
FooterText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#footer_text WaasWaasPolicy#footer_text}.

---

##### `HeaderText`<sup>Optional</sup> <a name="HeaderText" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchas.property.headerText"></a>

```go
HeaderText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#header_text WaasWaasPolicy#header_text}.

---

### WaasWaasPolicyWafConfigCustomProtectionRules <a name="WaasWaasPolicyWafConfigCustomProtectionRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigCustomProtectionRules {
	Action: *string,
	Exclusions: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRules.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRules.property.exclusions">Exclusions</a></code> | <code>interface{}</code> | exclusions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRules.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#id WaasWaasPolicy#id}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRules.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRules.property.exclusions"></a>

```go
Exclusions interface{}
```

- *Type:* interface{}

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#exclusions WaasWaasPolicy#exclusions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRules.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#id WaasWaasPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WaasWaasPolicyWafConfigCustomProtectionRulesExclusions <a name="WaasWaasPolicyWafConfigCustomProtectionRulesExclusions" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusions {
	Exclusions: *[]*string,
	Target: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusions.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#exclusions WaasWaasPolicy#exclusions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusions.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#target WaasWaasPolicy#target}. |

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusions.property.exclusions"></a>

```go
Exclusions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#exclusions WaasWaasPolicy#exclusions}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusions.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#target WaasWaasPolicy#target}.

---

### WaasWaasPolicyWafConfigDeviceFingerprintChallenge <a name="WaasWaasPolicyWafConfigDeviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge {
	IsEnabled: interface{},
	Action: *string,
	ActionExpirationInSeconds: *f64,
	ChallengeSettings: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings,
	FailureThreshold: *f64,
	FailureThresholdExpirationInSeconds: *f64,
	MaxAddressCount: *f64,
	MaxAddressCountExpirationInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action_expiration_in_seconds WaasWaasPolicy#action_expiration_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a></code> | challenge_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#failure_threshold WaasWaasPolicy#failure_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.failureThresholdExpirationInSeconds">FailureThresholdExpirationInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#failure_threshold_expiration_in_seconds WaasWaasPolicy#failure_threshold_expiration_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.maxAddressCount">MaxAddressCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#max_address_count WaasWaasPolicy#max_address_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.maxAddressCountExpirationInSeconds">MaxAddressCountExpirationInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#max_address_count_expiration_in_seconds WaasWaasPolicy#max_address_count_expiration_in_seconds}. |

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}.

---

##### `ActionExpirationInSeconds`<sup>Optional</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.actionExpirationInSeconds"></a>

```go
ActionExpirationInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action_expiration_in_seconds WaasWaasPolicy#action_expiration_in_seconds}.

---

##### `ChallengeSettings`<sup>Optional</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.challengeSettings"></a>

```go
ChallengeSettings WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a>

challenge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#challenge_settings WaasWaasPolicy#challenge_settings}

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#failure_threshold WaasWaasPolicy#failure_threshold}.

---

##### `FailureThresholdExpirationInSeconds`<sup>Optional</sup> <a name="FailureThresholdExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.failureThresholdExpirationInSeconds"></a>

```go
FailureThresholdExpirationInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#failure_threshold_expiration_in_seconds WaasWaasPolicy#failure_threshold_expiration_in_seconds}.

---

##### `MaxAddressCount`<sup>Optional</sup> <a name="MaxAddressCount" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.maxAddressCount"></a>

```go
MaxAddressCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#max_address_count WaasWaasPolicy#max_address_count}.

---

##### `MaxAddressCountExpirationInSeconds`<sup>Optional</sup> <a name="MaxAddressCountExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge.property.maxAddressCountExpirationInSeconds"></a>

```go
MaxAddressCountExpirationInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#max_address_count_expiration_in_seconds WaasWaasPolicy#max_address_count_expiration_in_seconds}.

---

### WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings <a name="WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings {
	BlockAction: *string,
	BlockErrorPageCode: *string,
	BlockErrorPageDescription: *string,
	BlockErrorPageMessage: *string,
	BlockResponseCode: *f64,
	CaptchaFooter: *string,
	CaptchaHeader: *string,
	CaptchaSubmitLabel: *string,
	CaptchaTitle: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.blockAction">BlockAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.captchaFooter">CaptchaFooter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_footer WaasWaasPolicy#captcha_footer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.captchaHeader">CaptchaHeader</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_header WaasWaasPolicy#captcha_header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_submit_label WaasWaasPolicy#captcha_submit_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.captchaTitle">CaptchaTitle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_title WaasWaasPolicy#captcha_title}. |

---

##### `BlockAction`<sup>Optional</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.blockAction"></a>

```go
BlockAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}.

---

##### `BlockErrorPageCode`<sup>Optional</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.blockErrorPageCode"></a>

```go
BlockErrorPageCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}.

---

##### `BlockErrorPageDescription`<sup>Optional</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.blockErrorPageDescription"></a>

```go
BlockErrorPageDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}.

---

##### `BlockErrorPageMessage`<sup>Optional</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.blockErrorPageMessage"></a>

```go
BlockErrorPageMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}.

---

##### `BlockResponseCode`<sup>Optional</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.blockResponseCode"></a>

```go
BlockResponseCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}.

---

##### `CaptchaFooter`<sup>Optional</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.captchaFooter"></a>

```go
CaptchaFooter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_footer WaasWaasPolicy#captcha_footer}.

---

##### `CaptchaHeader`<sup>Optional</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.captchaHeader"></a>

```go
CaptchaHeader *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_header WaasWaasPolicy#captcha_header}.

---

##### `CaptchaSubmitLabel`<sup>Optional</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.captchaSubmitLabel"></a>

```go
CaptchaSubmitLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_submit_label WaasWaasPolicy#captcha_submit_label}.

---

##### `CaptchaTitle`<sup>Optional</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.property.captchaTitle"></a>

```go
CaptchaTitle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_title WaasWaasPolicy#captcha_title}.

---

### WaasWaasPolicyWafConfigHumanInteractionChallenge <a name="WaasWaasPolicyWafConfigHumanInteractionChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge {
	IsEnabled: interface{},
	Action: *string,
	ActionExpirationInSeconds: *f64,
	ChallengeSettings: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings,
	FailureThreshold: *f64,
	FailureThresholdExpirationInSeconds: *f64,
	InteractionThreshold: *f64,
	IsNatEnabled: interface{},
	RecordingPeriodInSeconds: *f64,
	SetHttpHeader: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action_expiration_in_seconds WaasWaasPolicy#action_expiration_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a></code> | challenge_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#failure_threshold WaasWaasPolicy#failure_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.failureThresholdExpirationInSeconds">FailureThresholdExpirationInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#failure_threshold_expiration_in_seconds WaasWaasPolicy#failure_threshold_expiration_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.interactionThreshold">InteractionThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#interaction_threshold WaasWaasPolicy#interaction_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.isNatEnabled">IsNatEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_nat_enabled WaasWaasPolicy#is_nat_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.recordingPeriodInSeconds">RecordingPeriodInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#recording_period_in_seconds WaasWaasPolicy#recording_period_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.setHttpHeader">SetHttpHeader</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a></code> | set_http_header block. |

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}.

---

##### `ActionExpirationInSeconds`<sup>Optional</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.actionExpirationInSeconds"></a>

```go
ActionExpirationInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action_expiration_in_seconds WaasWaasPolicy#action_expiration_in_seconds}.

---

##### `ChallengeSettings`<sup>Optional</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.challengeSettings"></a>

```go
ChallengeSettings WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a>

challenge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#challenge_settings WaasWaasPolicy#challenge_settings}

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#failure_threshold WaasWaasPolicy#failure_threshold}.

---

##### `FailureThresholdExpirationInSeconds`<sup>Optional</sup> <a name="FailureThresholdExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.failureThresholdExpirationInSeconds"></a>

```go
FailureThresholdExpirationInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#failure_threshold_expiration_in_seconds WaasWaasPolicy#failure_threshold_expiration_in_seconds}.

---

##### `InteractionThreshold`<sup>Optional</sup> <a name="InteractionThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.interactionThreshold"></a>

```go
InteractionThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#interaction_threshold WaasWaasPolicy#interaction_threshold}.

---

##### `IsNatEnabled`<sup>Optional</sup> <a name="IsNatEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.isNatEnabled"></a>

```go
IsNatEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_nat_enabled WaasWaasPolicy#is_nat_enabled}.

---

##### `RecordingPeriodInSeconds`<sup>Optional</sup> <a name="RecordingPeriodInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.recordingPeriodInSeconds"></a>

```go
RecordingPeriodInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#recording_period_in_seconds WaasWaasPolicy#recording_period_in_seconds}.

---

##### `SetHttpHeader`<sup>Optional</sup> <a name="SetHttpHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge.property.setHttpHeader"></a>

```go
SetHttpHeader WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a>

set_http_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#set_http_header WaasWaasPolicy#set_http_header}

---

### WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings <a name="WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings {
	BlockAction: *string,
	BlockErrorPageCode: *string,
	BlockErrorPageDescription: *string,
	BlockErrorPageMessage: *string,
	BlockResponseCode: *f64,
	CaptchaFooter: *string,
	CaptchaHeader: *string,
	CaptchaSubmitLabel: *string,
	CaptchaTitle: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.blockAction">BlockAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.captchaFooter">CaptchaFooter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_footer WaasWaasPolicy#captcha_footer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.captchaHeader">CaptchaHeader</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_header WaasWaasPolicy#captcha_header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_submit_label WaasWaasPolicy#captcha_submit_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.captchaTitle">CaptchaTitle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_title WaasWaasPolicy#captcha_title}. |

---

##### `BlockAction`<sup>Optional</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.blockAction"></a>

```go
BlockAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}.

---

##### `BlockErrorPageCode`<sup>Optional</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.blockErrorPageCode"></a>

```go
BlockErrorPageCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}.

---

##### `BlockErrorPageDescription`<sup>Optional</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.blockErrorPageDescription"></a>

```go
BlockErrorPageDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}.

---

##### `BlockErrorPageMessage`<sup>Optional</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.blockErrorPageMessage"></a>

```go
BlockErrorPageMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}.

---

##### `BlockResponseCode`<sup>Optional</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.blockResponseCode"></a>

```go
BlockResponseCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}.

---

##### `CaptchaFooter`<sup>Optional</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.captchaFooter"></a>

```go
CaptchaFooter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_footer WaasWaasPolicy#captcha_footer}.

---

##### `CaptchaHeader`<sup>Optional</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.captchaHeader"></a>

```go
CaptchaHeader *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_header WaasWaasPolicy#captcha_header}.

---

##### `CaptchaSubmitLabel`<sup>Optional</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.captchaSubmitLabel"></a>

```go
CaptchaSubmitLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_submit_label WaasWaasPolicy#captcha_submit_label}.

---

##### `CaptchaTitle`<sup>Optional</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.property.captchaTitle"></a>

```go
CaptchaTitle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_title WaasWaasPolicy#captcha_title}.

---

### WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader <a name="WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}.

---

### WaasWaasPolicyWafConfigJsChallenge <a name="WaasWaasPolicyWafConfigJsChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigJsChallenge {
	IsEnabled: interface{},
	Action: *string,
	ActionExpirationInSeconds: *f64,
	AreRedirectsChallenged: interface{},
	ChallengeSettings: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings,
	Criteria: interface{},
	FailureThreshold: *f64,
	IsNatEnabled: interface{},
	SetHttpHeader: github.com/rhizo-co/cdktf-provider-oci-go/oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action_expiration_in_seconds WaasWaasPolicy#action_expiration_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.areRedirectsChallenged">AreRedirectsChallenged</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#are_redirects_challenged WaasWaasPolicy#are_redirects_challenged}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings">WaasWaasPolicyWafConfigJsChallengeChallengeSettings</a></code> | challenge_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.criteria">Criteria</a></code> | <code>interface{}</code> | criteria block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#failure_threshold WaasWaasPolicy#failure_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.isNatEnabled">IsNatEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_nat_enabled WaasWaasPolicy#is_nat_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.setHttpHeader">SetHttpHeader</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader">WaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a></code> | set_http_header block. |

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_enabled WaasWaasPolicy#is_enabled}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action WaasWaasPolicy#action}.

---

##### `ActionExpirationInSeconds`<sup>Optional</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.actionExpirationInSeconds"></a>

```go
ActionExpirationInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#action_expiration_in_seconds WaasWaasPolicy#action_expiration_in_seconds}.

---

##### `AreRedirectsChallenged`<sup>Optional</sup> <a name="AreRedirectsChallenged" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.areRedirectsChallenged"></a>

```go
AreRedirectsChallenged interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#are_redirects_challenged WaasWaasPolicy#are_redirects_challenged}.

---

##### `ChallengeSettings`<sup>Optional</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.challengeSettings"></a>

```go
ChallengeSettings WaasWaasPolicyWafConfigJsChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings">WaasWaasPolicyWafConfigJsChallengeChallengeSettings</a>

challenge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#challenge_settings WaasWaasPolicy#challenge_settings}

---

##### `Criteria`<sup>Optional</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.criteria"></a>

```go
Criteria interface{}
```

- *Type:* interface{}

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#criteria WaasWaasPolicy#criteria}

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#failure_threshold WaasWaasPolicy#failure_threshold}.

---

##### `IsNatEnabled`<sup>Optional</sup> <a name="IsNatEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.isNatEnabled"></a>

```go
IsNatEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_nat_enabled WaasWaasPolicy#is_nat_enabled}.

---

##### `SetHttpHeader`<sup>Optional</sup> <a name="SetHttpHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge.property.setHttpHeader"></a>

```go
SetHttpHeader WaasWaasPolicyWafConfigJsChallengeSetHttpHeader
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader">WaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a>

set_http_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#set_http_header WaasWaasPolicy#set_http_header}

---

### WaasWaasPolicyWafConfigJsChallengeChallengeSettings <a name="WaasWaasPolicyWafConfigJsChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings {
	BlockAction: *string,
	BlockErrorPageCode: *string,
	BlockErrorPageDescription: *string,
	BlockErrorPageMessage: *string,
	BlockResponseCode: *f64,
	CaptchaFooter: *string,
	CaptchaHeader: *string,
	CaptchaSubmitLabel: *string,
	CaptchaTitle: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.blockAction">BlockAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.captchaFooter">CaptchaFooter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_footer WaasWaasPolicy#captcha_footer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.captchaHeader">CaptchaHeader</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_header WaasWaasPolicy#captcha_header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_submit_label WaasWaasPolicy#captcha_submit_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.captchaTitle">CaptchaTitle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_title WaasWaasPolicy#captcha_title}. |

---

##### `BlockAction`<sup>Optional</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.blockAction"></a>

```go
BlockAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}.

---

##### `BlockErrorPageCode`<sup>Optional</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.blockErrorPageCode"></a>

```go
BlockErrorPageCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}.

---

##### `BlockErrorPageDescription`<sup>Optional</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.blockErrorPageDescription"></a>

```go
BlockErrorPageDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}.

---

##### `BlockErrorPageMessage`<sup>Optional</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.blockErrorPageMessage"></a>

```go
BlockErrorPageMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}.

---

##### `BlockResponseCode`<sup>Optional</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.blockResponseCode"></a>

```go
BlockResponseCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}.

---

##### `CaptchaFooter`<sup>Optional</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.captchaFooter"></a>

```go
CaptchaFooter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_footer WaasWaasPolicy#captcha_footer}.

---

##### `CaptchaHeader`<sup>Optional</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.captchaHeader"></a>

```go
CaptchaHeader *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_header WaasWaasPolicy#captcha_header}.

---

##### `CaptchaSubmitLabel`<sup>Optional</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.captchaSubmitLabel"></a>

```go
CaptchaSubmitLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_submit_label WaasWaasPolicy#captcha_submit_label}.

---

##### `CaptchaTitle`<sup>Optional</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings.property.captchaTitle"></a>

```go
CaptchaTitle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#captcha_title WaasWaasPolicy#captcha_title}.

---

### WaasWaasPolicyWafConfigJsChallengeCriteria <a name="WaasWaasPolicyWafConfigJsChallengeCriteria" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteria.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigJsChallengeCriteria {
	Condition: *string,
	Value: *string,
	IsCaseSensitive: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteria.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#condition WaasWaasPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteria.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteria.property.isCaseSensitive">IsCaseSensitive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_case_sensitive WaasWaasPolicy#is_case_sensitive}. |

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteria.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#condition WaasWaasPolicy#condition}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteria.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}.

---

##### `IsCaseSensitive`<sup>Optional</sup> <a name="IsCaseSensitive" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteria.property.isCaseSensitive"></a>

```go
IsCaseSensitive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_case_sensitive WaasWaasPolicy#is_case_sensitive}.

---

### WaasWaasPolicyWafConfigJsChallengeSetHttpHeader <a name="WaasWaasPolicyWafConfigJsChallengeSetHttpHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#value WaasWaasPolicy#value}.

---

### WaasWaasPolicyWafConfigProtectionSettings <a name="WaasWaasPolicyWafConfigProtectionSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigProtectionSettings {
	AllowedHttpMethods: *[]*string,
	BlockAction: *string,
	BlockErrorPageCode: *string,
	BlockErrorPageDescription: *string,
	BlockErrorPageMessage: *string,
	BlockResponseCode: *f64,
	IsResponseInspected: interface{},
	MaxArgumentCount: *f64,
	MaxNameLengthPerArgument: *f64,
	MaxResponseSizeInKiB: *f64,
	MaxTotalNameLengthOfArguments: *f64,
	MediaTypes: *[]*string,
	RecommendationsPeriodInDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#allowed_http_methods WaasWaasPolicy#allowed_http_methods}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.blockAction">BlockAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.isResponseInspected">IsResponseInspected</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_response_inspected WaasWaasPolicy#is_response_inspected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.maxArgumentCount">MaxArgumentCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#max_argument_count WaasWaasPolicy#max_argument_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.maxNameLengthPerArgument">MaxNameLengthPerArgument</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#max_name_length_per_argument WaasWaasPolicy#max_name_length_per_argument}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.maxResponseSizeInKiB">MaxResponseSizeInKiB</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#max_response_size_in_ki_b WaasWaasPolicy#max_response_size_in_ki_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.maxTotalNameLengthOfArguments">MaxTotalNameLengthOfArguments</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#max_total_name_length_of_arguments WaasWaasPolicy#max_total_name_length_of_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.mediaTypes">MediaTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#media_types WaasWaasPolicy#media_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.recommendationsPeriodInDays">RecommendationsPeriodInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#recommendations_period_in_days WaasWaasPolicy#recommendations_period_in_days}. |

---

##### `AllowedHttpMethods`<sup>Optional</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.allowedHttpMethods"></a>

```go
AllowedHttpMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#allowed_http_methods WaasWaasPolicy#allowed_http_methods}.

---

##### `BlockAction`<sup>Optional</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.blockAction"></a>

```go
BlockAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_action WaasWaasPolicy#block_action}.

---

##### `BlockErrorPageCode`<sup>Optional</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.blockErrorPageCode"></a>

```go
BlockErrorPageCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_code WaasWaasPolicy#block_error_page_code}.

---

##### `BlockErrorPageDescription`<sup>Optional</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.blockErrorPageDescription"></a>

```go
BlockErrorPageDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_description WaasWaasPolicy#block_error_page_description}.

---

##### `BlockErrorPageMessage`<sup>Optional</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.blockErrorPageMessage"></a>

```go
BlockErrorPageMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_error_page_message WaasWaasPolicy#block_error_page_message}.

---

##### `BlockResponseCode`<sup>Optional</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.blockResponseCode"></a>

```go
BlockResponseCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#block_response_code WaasWaasPolicy#block_response_code}.

---

##### `IsResponseInspected`<sup>Optional</sup> <a name="IsResponseInspected" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.isResponseInspected"></a>

```go
IsResponseInspected interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#is_response_inspected WaasWaasPolicy#is_response_inspected}.

---

##### `MaxArgumentCount`<sup>Optional</sup> <a name="MaxArgumentCount" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.maxArgumentCount"></a>

```go
MaxArgumentCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#max_argument_count WaasWaasPolicy#max_argument_count}.

---

##### `MaxNameLengthPerArgument`<sup>Optional</sup> <a name="MaxNameLengthPerArgument" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.maxNameLengthPerArgument"></a>

```go
MaxNameLengthPerArgument *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#max_name_length_per_argument WaasWaasPolicy#max_name_length_per_argument}.

---

##### `MaxResponseSizeInKiB`<sup>Optional</sup> <a name="MaxResponseSizeInKiB" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.maxResponseSizeInKiB"></a>

```go
MaxResponseSizeInKiB *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#max_response_size_in_ki_b WaasWaasPolicy#max_response_size_in_ki_b}.

---

##### `MaxTotalNameLengthOfArguments`<sup>Optional</sup> <a name="MaxTotalNameLengthOfArguments" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.maxTotalNameLengthOfArguments"></a>

```go
MaxTotalNameLengthOfArguments *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#max_total_name_length_of_arguments WaasWaasPolicy#max_total_name_length_of_arguments}.

---

##### `MediaTypes`<sup>Optional</sup> <a name="MediaTypes" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.mediaTypes"></a>

```go
MediaTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#media_types WaasWaasPolicy#media_types}.

---

##### `RecommendationsPeriodInDays`<sup>Optional</sup> <a name="RecommendationsPeriodInDays" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings.property.recommendationsPeriodInDays"></a>

```go
RecommendationsPeriodInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#recommendations_period_in_days WaasWaasPolicy#recommendations_period_in_days}.

---

### WaasWaasPolicyWafConfigWhitelists <a name="WaasWaasPolicyWafConfigWhitelists" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelists"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelists.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

&waaswaaspolicy.WaasWaasPolicyWafConfigWhitelists {
	Name: *string,
	Addresses: *[]*string,
	AddressLists: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelists.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelists.property.addresses">Addresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#addresses WaasWaasPolicy#addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelists.property.addressLists">AddressLists</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#address_lists WaasWaasPolicy#address_lists}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelists.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#name WaasWaasPolicy#name}.

---

##### `Addresses`<sup>Optional</sup> <a name="Addresses" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelists.property.addresses"></a>

```go
Addresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#addresses WaasWaasPolicy#addresses}.

---

##### `AddressLists`<sup>Optional</sup> <a name="AddressLists" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelists.property.addressLists"></a>

```go
AddressLists *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waas_waas_policy#address_lists WaasWaasPolicy#address_lists}.

---

## Classes <a name="Classes" id="Classes"></a>

### WaasWaasPolicyOriginGroupsList <a name="WaasWaasPolicyOriginGroupsList" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyOriginGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaasWaasPolicyOriginGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.get"></a>

```go
func Get(index *f64) WaasWaasPolicyOriginGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyOriginGroupsOriginGroupList <a name="WaasWaasPolicyOriginGroupsOriginGroupList" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyOriginGroupsOriginGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaasWaasPolicyOriginGroupsOriginGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.get"></a>

```go
func Get(index *f64) WaasWaasPolicyOriginGroupsOriginGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyOriginGroupsOriginGroupOutputReference <a name="WaasWaasPolicyOriginGroupsOriginGroupOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyOriginGroupsOriginGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaasWaasPolicyOriginGroupsOriginGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeight` <a name="ResetWeight" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.originInput">OriginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.originInput"></a>

```go
func OriginInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyOriginGroupsOutputReference <a name="WaasWaasPolicyOriginGroupsOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyOriginGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaasWaasPolicyOriginGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.putOriginGroup">PutOriginGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOriginGroup` <a name="PutOriginGroup" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.putOriginGroup"></a>

```go
func PutOriginGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.putOriginGroup.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.property.originGroup">OriginGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList">WaasWaasPolicyOriginGroupsOriginGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.property.originGroupInput">OriginGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OriginGroup`<sup>Required</sup> <a name="OriginGroup" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.property.originGroup"></a>

```go
func OriginGroup() WaasWaasPolicyOriginGroupsOriginGroupList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOriginGroupList">WaasWaasPolicyOriginGroupsOriginGroupList</a>

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `OriginGroupInput`<sup>Optional</sup> <a name="OriginGroupInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.property.originGroupInput"></a>

```go
func OriginGroupInput() interface{}
```

- *Type:* interface{}

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyOriginsCustomHeadersList <a name="WaasWaasPolicyOriginsCustomHeadersList" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyOriginsCustomHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaasWaasPolicyOriginsCustomHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.get"></a>

```go
func Get(index *f64) WaasWaasPolicyOriginsCustomHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyOriginsCustomHeadersOutputReference <a name="WaasWaasPolicyOriginsCustomHeadersOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyOriginsCustomHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaasWaasPolicyOriginsCustomHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyOriginsList <a name="WaasWaasPolicyOriginsList" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyOriginsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaasWaasPolicyOriginsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.get"></a>

```go
func Get(index *f64) WaasWaasPolicyOriginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyOriginsOutputReference <a name="WaasWaasPolicyOriginsOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyOriginsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaasWaasPolicyOriginsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.putCustomHeaders">PutCustomHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.resetCustomHeaders">ResetCustomHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.resetHttpPort">ResetHttpPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.resetHttpsPort">ResetHttpsPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomHeaders` <a name="PutCustomHeaders" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.putCustomHeaders"></a>

```go
func PutCustomHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.putCustomHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomHeaders` <a name="ResetCustomHeaders" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.resetCustomHeaders"></a>

```go
func ResetCustomHeaders()
```

##### `ResetHttpPort` <a name="ResetHttpPort" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.resetHttpPort"></a>

```go
func ResetHttpPort()
```

##### `ResetHttpsPort` <a name="ResetHttpsPort" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.resetHttpsPort"></a>

```go
func ResetHttpsPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.customHeaders">CustomHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList">WaasWaasPolicyOriginsCustomHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.customHeadersInput">CustomHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.httpPortInput">HttpPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.httpsPortInput">HttpsPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.httpPort">HttpPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.httpsPort">HttpsPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomHeaders`<sup>Required</sup> <a name="CustomHeaders" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.customHeaders"></a>

```go
func CustomHeaders() WaasWaasPolicyOriginsCustomHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsCustomHeadersList">WaasWaasPolicyOriginsCustomHeadersList</a>

---

##### `CustomHeadersInput`<sup>Optional</sup> <a name="CustomHeadersInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.customHeadersInput"></a>

```go
func CustomHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `HttpPortInput`<sup>Optional</sup> <a name="HttpPortInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.httpPortInput"></a>

```go
func HttpPortInput() *f64
```

- *Type:* *f64

---

##### `HttpsPortInput`<sup>Optional</sup> <a name="HttpsPortInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.httpsPortInput"></a>

```go
func HttpsPortInput() *f64
```

- *Type:* *f64

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.httpPort"></a>

```go
func HttpPort() *f64
```

- *Type:* *f64

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.httpsPort"></a>

```go
func HttpsPort() *f64
```

- *Type:* *f64

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyOriginsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyPolicyConfigHealthChecksOutputReference <a name="WaasWaasPolicyPolicyConfigHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyPolicyConfigHealthChecksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyPolicyConfigHealthChecksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetExpectedResponseCodeGroup">ResetExpectedResponseCodeGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetExpectedResponseText">ResetExpectedResponseText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetIntervalInSeconds">ResetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetIsResponseTextCheckEnabled">ResetIsResponseTextCheckEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpectedResponseCodeGroup` <a name="ResetExpectedResponseCodeGroup" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetExpectedResponseCodeGroup"></a>

```go
func ResetExpectedResponseCodeGroup()
```

##### `ResetExpectedResponseText` <a name="ResetExpectedResponseText" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetExpectedResponseText"></a>

```go
func ResetExpectedResponseText()
```

##### `ResetHeaders` <a name="ResetHeaders" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetHealthyThreshold"></a>

```go
func ResetHealthyThreshold()
```

##### `ResetIntervalInSeconds` <a name="ResetIntervalInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetIntervalInSeconds"></a>

```go
func ResetIntervalInSeconds()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetIsResponseTextCheckEnabled` <a name="ResetIsResponseTextCheckEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetIsResponseTextCheckEnabled"></a>

```go
func ResetIsResponseTextCheckEnabled()
```

##### `ResetMethod` <a name="ResetMethod" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.resetUnhealthyThreshold"></a>

```go
func ResetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroupInput">ExpectedResponseCodeGroupInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseTextInput">ExpectedResponseTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.headersInput">HeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.intervalInSecondsInput">IntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabledInput">IsResponseTextCheckEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroup">ExpectedResponseCodeGroup</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseText">ExpectedResponseText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.headers">Headers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabled">IsResponseTextCheckEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks">WaasWaasPolicyPolicyConfigHealthChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpectedResponseCodeGroupInput`<sup>Optional</sup> <a name="ExpectedResponseCodeGroupInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroupInput"></a>

```go
func ExpectedResponseCodeGroupInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExpectedResponseTextInput`<sup>Optional</sup> <a name="ExpectedResponseTextInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseTextInput"></a>

```go
func ExpectedResponseTextInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.headersInput"></a>

```go
func HeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.healthyThresholdInput"></a>

```go
func HealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `IntervalInSecondsInput`<sup>Optional</sup> <a name="IntervalInSecondsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.intervalInSecondsInput"></a>

```go
func IntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponseTextCheckEnabledInput`<sup>Optional</sup> <a name="IsResponseTextCheckEnabledInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabledInput"></a>

```go
func IsResponseTextCheckEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.unhealthyThresholdInput"></a>

```go
func UnhealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `ExpectedResponseCodeGroup`<sup>Required</sup> <a name="ExpectedResponseCodeGroup" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroup"></a>

```go
func ExpectedResponseCodeGroup() *[]*string
```

- *Type:* *[]*string

---

##### `ExpectedResponseText`<sup>Required</sup> <a name="ExpectedResponseText" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseText"></a>

```go
func ExpectedResponseText() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.headers"></a>

```go
func Headers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.intervalInSeconds"></a>

```go
func IntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsResponseTextCheckEnabled`<sup>Required</sup> <a name="IsResponseTextCheckEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabled"></a>

```go
func IsResponseTextCheckEnabled() interface{}
```

- *Type:* interface{}

---

##### `Method`<sup>Required</sup> <a name="Method" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.internalValue"></a>

```go
func InternalValue() WaasWaasPolicyPolicyConfigHealthChecks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks">WaasWaasPolicyPolicyConfigHealthChecks</a>

---


### WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference <a name="WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resetExpirationTimeInSeconds">ResetExpirationTimeInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomain` <a name="ResetDomain" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetExpirationTimeInSeconds` <a name="ResetExpirationTimeInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resetExpirationTimeInSeconds"></a>

```go
func ResetExpirationTimeInSeconds()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSecondsInput">ExpirationTimeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSeconds">ExpirationTimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod">WaasWaasPolicyPolicyConfigLoadBalancingMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `ExpirationTimeInSecondsInput`<sup>Optional</sup> <a name="ExpirationTimeInSecondsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSecondsInput"></a>

```go
func ExpirationTimeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `ExpirationTimeInSeconds`<sup>Required</sup> <a name="ExpirationTimeInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSeconds"></a>

```go
func ExpirationTimeInSeconds() *f64
```

- *Type:* *f64

---

##### `Method`<sup>Required</sup> <a name="Method" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.internalValue"></a>

```go
func InternalValue() WaasWaasPolicyPolicyConfigLoadBalancingMethod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod">WaasWaasPolicyPolicyConfigLoadBalancingMethod</a>

---


### WaasWaasPolicyPolicyConfigOutputReference <a name="WaasWaasPolicyPolicyConfigOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.putHealthChecks">PutHealthChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.putLoadBalancingMethod">PutLoadBalancingMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetCipherGroup">ResetCipherGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetClientAddressHeader">ResetClientAddressHeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetHealthChecks">ResetHealthChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetIsBehindCdn">ResetIsBehindCdn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetIsCacheControlRespected">ResetIsCacheControlRespected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetIsHttpsEnabled">ResetIsHttpsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetIsHttpsForced">ResetIsHttpsForced</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetIsOriginCompressionEnabled">ResetIsOriginCompressionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetIsResponseBufferingEnabled">ResetIsResponseBufferingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetIsSniEnabled">ResetIsSniEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetLoadBalancingMethod">ResetLoadBalancingMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetTlsProtocols">ResetTlsProtocols</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetWebsocketPathPrefixes">ResetWebsocketPathPrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthChecks` <a name="PutHealthChecks" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.putHealthChecks"></a>

```go
func PutHealthChecks(value WaasWaasPolicyPolicyConfigHealthChecks)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.putHealthChecks.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks">WaasWaasPolicyPolicyConfigHealthChecks</a>

---

##### `PutLoadBalancingMethod` <a name="PutLoadBalancingMethod" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.putLoadBalancingMethod"></a>

```go
func PutLoadBalancingMethod(value WaasWaasPolicyPolicyConfigLoadBalancingMethod)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.putLoadBalancingMethod.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod">WaasWaasPolicyPolicyConfigLoadBalancingMethod</a>

---

##### `ResetCertificateId` <a name="ResetCertificateId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetCertificateId"></a>

```go
func ResetCertificateId()
```

##### `ResetCipherGroup` <a name="ResetCipherGroup" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetCipherGroup"></a>

```go
func ResetCipherGroup()
```

##### `ResetClientAddressHeader` <a name="ResetClientAddressHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetClientAddressHeader"></a>

```go
func ResetClientAddressHeader()
```

##### `ResetHealthChecks` <a name="ResetHealthChecks" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetHealthChecks"></a>

```go
func ResetHealthChecks()
```

##### `ResetIsBehindCdn` <a name="ResetIsBehindCdn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetIsBehindCdn"></a>

```go
func ResetIsBehindCdn()
```

##### `ResetIsCacheControlRespected` <a name="ResetIsCacheControlRespected" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetIsCacheControlRespected"></a>

```go
func ResetIsCacheControlRespected()
```

##### `ResetIsHttpsEnabled` <a name="ResetIsHttpsEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetIsHttpsEnabled"></a>

```go
func ResetIsHttpsEnabled()
```

##### `ResetIsHttpsForced` <a name="ResetIsHttpsForced" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetIsHttpsForced"></a>

```go
func ResetIsHttpsForced()
```

##### `ResetIsOriginCompressionEnabled` <a name="ResetIsOriginCompressionEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetIsOriginCompressionEnabled"></a>

```go
func ResetIsOriginCompressionEnabled()
```

##### `ResetIsResponseBufferingEnabled` <a name="ResetIsResponseBufferingEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetIsResponseBufferingEnabled"></a>

```go
func ResetIsResponseBufferingEnabled()
```

##### `ResetIsSniEnabled` <a name="ResetIsSniEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetIsSniEnabled"></a>

```go
func ResetIsSniEnabled()
```

##### `ResetLoadBalancingMethod` <a name="ResetLoadBalancingMethod" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetLoadBalancingMethod"></a>

```go
func ResetLoadBalancingMethod()
```

##### `ResetTlsProtocols` <a name="ResetTlsProtocols" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetTlsProtocols"></a>

```go
func ResetTlsProtocols()
```

##### `ResetWebsocketPathPrefixes` <a name="ResetWebsocketPathPrefixes" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.resetWebsocketPathPrefixes"></a>

```go
func ResetWebsocketPathPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.healthChecks">HealthChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference">WaasWaasPolicyPolicyConfigHealthChecksOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.loadBalancingMethod">LoadBalancingMethod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference">WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.cipherGroupInput">CipherGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.clientAddressHeaderInput">ClientAddressHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.healthChecksInput">HealthChecksInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks">WaasWaasPolicyPolicyConfigHealthChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isBehindCdnInput">IsBehindCdnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isCacheControlRespectedInput">IsCacheControlRespectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isHttpsEnabledInput">IsHttpsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isHttpsForcedInput">IsHttpsForcedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isOriginCompressionEnabledInput">IsOriginCompressionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isResponseBufferingEnabledInput">IsResponseBufferingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isSniEnabledInput">IsSniEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.loadBalancingMethodInput">LoadBalancingMethodInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod">WaasWaasPolicyPolicyConfigLoadBalancingMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.tlsProtocolsInput">TlsProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.websocketPathPrefixesInput">WebsocketPathPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.cipherGroup">CipherGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.clientAddressHeader">ClientAddressHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isBehindCdn">IsBehindCdn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isCacheControlRespected">IsCacheControlRespected</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isHttpsEnabled">IsHttpsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isHttpsForced">IsHttpsForced</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isOriginCompressionEnabled">IsOriginCompressionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isResponseBufferingEnabled">IsResponseBufferingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isSniEnabled">IsSniEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.tlsProtocols">TlsProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.websocketPathPrefixes">WebsocketPathPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig">WaasWaasPolicyPolicyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.healthChecks"></a>

```go
func HealthChecks() WaasWaasPolicyPolicyConfigHealthChecksOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecksOutputReference">WaasWaasPolicyPolicyConfigHealthChecksOutputReference</a>

---

##### `LoadBalancingMethod`<sup>Required</sup> <a name="LoadBalancingMethod" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.loadBalancingMethod"></a>

```go
func LoadBalancingMethod() WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference">WaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference</a>

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.certificateIdInput"></a>

```go
func CertificateIdInput() *string
```

- *Type:* *string

---

##### `CipherGroupInput`<sup>Optional</sup> <a name="CipherGroupInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.cipherGroupInput"></a>

```go
func CipherGroupInput() *string
```

- *Type:* *string

---

##### `ClientAddressHeaderInput`<sup>Optional</sup> <a name="ClientAddressHeaderInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.clientAddressHeaderInput"></a>

```go
func ClientAddressHeaderInput() *string
```

- *Type:* *string

---

##### `HealthChecksInput`<sup>Optional</sup> <a name="HealthChecksInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.healthChecksInput"></a>

```go
func HealthChecksInput() WaasWaasPolicyPolicyConfigHealthChecks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigHealthChecks">WaasWaasPolicyPolicyConfigHealthChecks</a>

---

##### `IsBehindCdnInput`<sup>Optional</sup> <a name="IsBehindCdnInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isBehindCdnInput"></a>

```go
func IsBehindCdnInput() interface{}
```

- *Type:* interface{}

---

##### `IsCacheControlRespectedInput`<sup>Optional</sup> <a name="IsCacheControlRespectedInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isCacheControlRespectedInput"></a>

```go
func IsCacheControlRespectedInput() interface{}
```

- *Type:* interface{}

---

##### `IsHttpsEnabledInput`<sup>Optional</sup> <a name="IsHttpsEnabledInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isHttpsEnabledInput"></a>

```go
func IsHttpsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsHttpsForcedInput`<sup>Optional</sup> <a name="IsHttpsForcedInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isHttpsForcedInput"></a>

```go
func IsHttpsForcedInput() interface{}
```

- *Type:* interface{}

---

##### `IsOriginCompressionEnabledInput`<sup>Optional</sup> <a name="IsOriginCompressionEnabledInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isOriginCompressionEnabledInput"></a>

```go
func IsOriginCompressionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponseBufferingEnabledInput`<sup>Optional</sup> <a name="IsResponseBufferingEnabledInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isResponseBufferingEnabledInput"></a>

```go
func IsResponseBufferingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsSniEnabledInput`<sup>Optional</sup> <a name="IsSniEnabledInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isSniEnabledInput"></a>

```go
func IsSniEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LoadBalancingMethodInput`<sup>Optional</sup> <a name="LoadBalancingMethodInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.loadBalancingMethodInput"></a>

```go
func LoadBalancingMethodInput() WaasWaasPolicyPolicyConfigLoadBalancingMethod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigLoadBalancingMethod">WaasWaasPolicyPolicyConfigLoadBalancingMethod</a>

---

##### `TlsProtocolsInput`<sup>Optional</sup> <a name="TlsProtocolsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.tlsProtocolsInput"></a>

```go
func TlsProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `WebsocketPathPrefixesInput`<sup>Optional</sup> <a name="WebsocketPathPrefixesInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.websocketPathPrefixesInput"></a>

```go
func WebsocketPathPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `CipherGroup`<sup>Required</sup> <a name="CipherGroup" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.cipherGroup"></a>

```go
func CipherGroup() *string
```

- *Type:* *string

---

##### `ClientAddressHeader`<sup>Required</sup> <a name="ClientAddressHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.clientAddressHeader"></a>

```go
func ClientAddressHeader() *string
```

- *Type:* *string

---

##### `IsBehindCdn`<sup>Required</sup> <a name="IsBehindCdn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isBehindCdn"></a>

```go
func IsBehindCdn() interface{}
```

- *Type:* interface{}

---

##### `IsCacheControlRespected`<sup>Required</sup> <a name="IsCacheControlRespected" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isCacheControlRespected"></a>

```go
func IsCacheControlRespected() interface{}
```

- *Type:* interface{}

---

##### `IsHttpsEnabled`<sup>Required</sup> <a name="IsHttpsEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isHttpsEnabled"></a>

```go
func IsHttpsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsHttpsForced`<sup>Required</sup> <a name="IsHttpsForced" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isHttpsForced"></a>

```go
func IsHttpsForced() interface{}
```

- *Type:* interface{}

---

##### `IsOriginCompressionEnabled`<sup>Required</sup> <a name="IsOriginCompressionEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isOriginCompressionEnabled"></a>

```go
func IsOriginCompressionEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsResponseBufferingEnabled`<sup>Required</sup> <a name="IsResponseBufferingEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isResponseBufferingEnabled"></a>

```go
func IsResponseBufferingEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsSniEnabled`<sup>Required</sup> <a name="IsSniEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.isSniEnabled"></a>

```go
func IsSniEnabled() interface{}
```

- *Type:* interface{}

---

##### `TlsProtocols`<sup>Required</sup> <a name="TlsProtocols" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.tlsProtocols"></a>

```go
func TlsProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `WebsocketPathPrefixes`<sup>Required</sup> <a name="WebsocketPathPrefixes" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.websocketPathPrefixes"></a>

```go
func WebsocketPathPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() WaasWaasPolicyPolicyConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyPolicyConfig">WaasWaasPolicyPolicyConfig</a>

---


### WaasWaasPolicyTimeoutsOutputReference <a name="WaasWaasPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigAccessRulesCriteriaList <a name="WaasWaasPolicyWafConfigAccessRulesCriteriaList" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigAccessRulesCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaasWaasPolicyWafConfigAccessRulesCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.get"></a>

```go
func Get(index *f64) WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference <a name="WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resetIsCaseSensitive">ResetIsCaseSensitive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsCaseSensitive` <a name="ResetIsCaseSensitive" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resetIsCaseSensitive"></a>

```go
func ResetIsCaseSensitive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitiveInput">IsCaseSensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitive">IsCaseSensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `IsCaseSensitiveInput`<sup>Optional</sup> <a name="IsCaseSensitiveInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitiveInput"></a>

```go
func IsCaseSensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `IsCaseSensitive`<sup>Required</sup> <a name="IsCaseSensitive" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitive"></a>

```go
func IsCaseSensitive() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigAccessRulesList <a name="WaasWaasPolicyWafConfigAccessRulesList" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigAccessRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaasWaasPolicyWafConfigAccessRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.get"></a>

```go
func Get(index *f64) WaasWaasPolicyWafConfigAccessRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigAccessRulesOutputReference <a name="WaasWaasPolicyWafConfigAccessRulesOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigAccessRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaasWaasPolicyWafConfigAccessRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.putResponseHeaderManipulation">PutResponseHeaderManipulation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetBlockAction">ResetBlockAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetBlockErrorPageCode">ResetBlockErrorPageCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetBlockErrorPageDescription">ResetBlockErrorPageDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetBlockErrorPageMessage">ResetBlockErrorPageMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetBlockResponseCode">ResetBlockResponseCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetBypassChallenges">ResetBypassChallenges</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetCaptchaFooter">ResetCaptchaFooter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetCaptchaHeader">ResetCaptchaHeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetCaptchaSubmitLabel">ResetCaptchaSubmitLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetCaptchaTitle">ResetCaptchaTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetRedirectResponseCode">ResetRedirectResponseCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetRedirectUrl">ResetRedirectUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetResponseHeaderManipulation">ResetResponseHeaderManipulation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteria` <a name="PutCriteria" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.putCriteria"></a>

```go
func PutCriteria(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.putCriteria.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResponseHeaderManipulation` <a name="PutResponseHeaderManipulation" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.putResponseHeaderManipulation"></a>

```go
func PutResponseHeaderManipulation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.putResponseHeaderManipulation.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBlockAction` <a name="ResetBlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetBlockAction"></a>

```go
func ResetBlockAction()
```

##### `ResetBlockErrorPageCode` <a name="ResetBlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetBlockErrorPageCode"></a>

```go
func ResetBlockErrorPageCode()
```

##### `ResetBlockErrorPageDescription` <a name="ResetBlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetBlockErrorPageDescription"></a>

```go
func ResetBlockErrorPageDescription()
```

##### `ResetBlockErrorPageMessage` <a name="ResetBlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetBlockErrorPageMessage"></a>

```go
func ResetBlockErrorPageMessage()
```

##### `ResetBlockResponseCode` <a name="ResetBlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetBlockResponseCode"></a>

```go
func ResetBlockResponseCode()
```

##### `ResetBypassChallenges` <a name="ResetBypassChallenges" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetBypassChallenges"></a>

```go
func ResetBypassChallenges()
```

##### `ResetCaptchaFooter` <a name="ResetCaptchaFooter" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetCaptchaFooter"></a>

```go
func ResetCaptchaFooter()
```

##### `ResetCaptchaHeader` <a name="ResetCaptchaHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetCaptchaHeader"></a>

```go
func ResetCaptchaHeader()
```

##### `ResetCaptchaSubmitLabel` <a name="ResetCaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetCaptchaSubmitLabel"></a>

```go
func ResetCaptchaSubmitLabel()
```

##### `ResetCaptchaTitle` <a name="ResetCaptchaTitle" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetCaptchaTitle"></a>

```go
func ResetCaptchaTitle()
```

##### `ResetRedirectResponseCode` <a name="ResetRedirectResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetRedirectResponseCode"></a>

```go
func ResetRedirectResponseCode()
```

##### `ResetRedirectUrl` <a name="ResetRedirectUrl" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetRedirectUrl"></a>

```go
func ResetRedirectUrl()
```

##### `ResetResponseHeaderManipulation` <a name="ResetResponseHeaderManipulation" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.resetResponseHeaderManipulation"></a>

```go
func ResetResponseHeaderManipulation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.criteria">Criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList">WaasWaasPolicyWafConfigAccessRulesCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.responseHeaderManipulation">ResponseHeaderManipulation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList">WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockActionInput">BlockActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageCodeInput">BlockErrorPageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageDescriptionInput">BlockErrorPageDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageMessageInput">BlockErrorPageMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockResponseCodeInput">BlockResponseCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.bypassChallengesInput">BypassChallengesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaFooterInput">CaptchaFooterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaHeaderInput">CaptchaHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaSubmitLabelInput">CaptchaSubmitLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaTitleInput">CaptchaTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectResponseCodeInput">RedirectResponseCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectUrlInput">RedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.responseHeaderManipulationInput">ResponseHeaderManipulationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockAction">BlockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.bypassChallenges">BypassChallenges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectResponseCode">RedirectResponseCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.criteria"></a>

```go
func Criteria() WaasWaasPolicyWafConfigAccessRulesCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesCriteriaList">WaasWaasPolicyWafConfigAccessRulesCriteriaList</a>

---

##### `ResponseHeaderManipulation`<sup>Required</sup> <a name="ResponseHeaderManipulation" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.responseHeaderManipulation"></a>

```go
func ResponseHeaderManipulation() WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList">WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `BlockActionInput`<sup>Optional</sup> <a name="BlockActionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockActionInput"></a>

```go
func BlockActionInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageCodeInput`<sup>Optional</sup> <a name="BlockErrorPageCodeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageCodeInput"></a>

```go
func BlockErrorPageCodeInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescriptionInput`<sup>Optional</sup> <a name="BlockErrorPageDescriptionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageDescriptionInput"></a>

```go
func BlockErrorPageDescriptionInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessageInput`<sup>Optional</sup> <a name="BlockErrorPageMessageInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageMessageInput"></a>

```go
func BlockErrorPageMessageInput() *string
```

- *Type:* *string

---

##### `BlockResponseCodeInput`<sup>Optional</sup> <a name="BlockResponseCodeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockResponseCodeInput"></a>

```go
func BlockResponseCodeInput() *f64
```

- *Type:* *f64

---

##### `BypassChallengesInput`<sup>Optional</sup> <a name="BypassChallengesInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.bypassChallengesInput"></a>

```go
func BypassChallengesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CaptchaFooterInput`<sup>Optional</sup> <a name="CaptchaFooterInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaFooterInput"></a>

```go
func CaptchaFooterInput() *string
```

- *Type:* *string

---

##### `CaptchaHeaderInput`<sup>Optional</sup> <a name="CaptchaHeaderInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaHeaderInput"></a>

```go
func CaptchaHeaderInput() *string
```

- *Type:* *string

---

##### `CaptchaSubmitLabelInput`<sup>Optional</sup> <a name="CaptchaSubmitLabelInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaSubmitLabelInput"></a>

```go
func CaptchaSubmitLabelInput() *string
```

- *Type:* *string

---

##### `CaptchaTitleInput`<sup>Optional</sup> <a name="CaptchaTitleInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaTitleInput"></a>

```go
func CaptchaTitleInput() *string
```

- *Type:* *string

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.criteriaInput"></a>

```go
func CriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RedirectResponseCodeInput`<sup>Optional</sup> <a name="RedirectResponseCodeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectResponseCodeInput"></a>

```go
func RedirectResponseCodeInput() *string
```

- *Type:* *string

---

##### `RedirectUrlInput`<sup>Optional</sup> <a name="RedirectUrlInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectUrlInput"></a>

```go
func RedirectUrlInput() *string
```

- *Type:* *string

---

##### `ResponseHeaderManipulationInput`<sup>Optional</sup> <a name="ResponseHeaderManipulationInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.responseHeaderManipulationInput"></a>

```go
func ResponseHeaderManipulationInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockAction"></a>

```go
func BlockAction() *string
```

- *Type:* *string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageCode"></a>

```go
func BlockErrorPageCode() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageDescription"></a>

```go
func BlockErrorPageDescription() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageMessage"></a>

```go
func BlockErrorPageMessage() *string
```

- *Type:* *string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockResponseCode"></a>

```go
func BlockResponseCode() *f64
```

- *Type:* *f64

---

##### `BypassChallenges`<sup>Required</sup> <a name="BypassChallenges" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.bypassChallenges"></a>

```go
func BypassChallenges() *[]*string
```

- *Type:* *[]*string

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaFooter"></a>

```go
func CaptchaFooter() *string
```

- *Type:* *string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaHeader"></a>

```go
func CaptchaHeader() *string
```

- *Type:* *string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaSubmitLabel"></a>

```go
func CaptchaSubmitLabel() *string
```

- *Type:* *string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaTitle"></a>

```go
func CaptchaTitle() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RedirectResponseCode`<sup>Required</sup> <a name="RedirectResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectResponseCode"></a>

```go
func RedirectResponseCode() *string
```

- *Type:* *string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectUrl"></a>

```go
func RedirectUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList <a name="WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get"></a>

```go
func Get(index *f64) WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference <a name="WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.headerInput">HeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.header">Header</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.headerInput"></a>

```go
func HeaderInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.header"></a>

```go
func Header() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigAddressRateLimitingOutputReference <a name="WaasWaasPolicyWafConfigAddressRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigAddressRateLimitingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyWafConfigAddressRateLimitingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resetAllowedRatePerAddress">ResetAllowedRatePerAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resetBlockResponseCode">ResetBlockResponseCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resetMaxDelayedCountPerAddress">ResetMaxDelayedCountPerAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRatePerAddress` <a name="ResetAllowedRatePerAddress" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resetAllowedRatePerAddress"></a>

```go
func ResetAllowedRatePerAddress()
```

##### `ResetBlockResponseCode` <a name="ResetBlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resetBlockResponseCode"></a>

```go
func ResetBlockResponseCode()
```

##### `ResetMaxDelayedCountPerAddress` <a name="ResetMaxDelayedCountPerAddress" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resetMaxDelayedCountPerAddress"></a>

```go
func ResetMaxDelayedCountPerAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddressInput">AllowedRatePerAddressInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.blockResponseCodeInput">BlockResponseCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddressInput">MaxDelayedCountPerAddressInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddress">AllowedRatePerAddress</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddress">MaxDelayedCountPerAddress</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting">WaasWaasPolicyWafConfigAddressRateLimiting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRatePerAddressInput`<sup>Optional</sup> <a name="AllowedRatePerAddressInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddressInput"></a>

```go
func AllowedRatePerAddressInput() *f64
```

- *Type:* *f64

---

##### `BlockResponseCodeInput`<sup>Optional</sup> <a name="BlockResponseCodeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.blockResponseCodeInput"></a>

```go
func BlockResponseCodeInput() *f64
```

- *Type:* *f64

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxDelayedCountPerAddressInput`<sup>Optional</sup> <a name="MaxDelayedCountPerAddressInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddressInput"></a>

```go
func MaxDelayedCountPerAddressInput() *f64
```

- *Type:* *f64

---

##### `AllowedRatePerAddress`<sup>Required</sup> <a name="AllowedRatePerAddress" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddress"></a>

```go
func AllowedRatePerAddress() *f64
```

- *Type:* *f64

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.blockResponseCode"></a>

```go
func BlockResponseCode() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `MaxDelayedCountPerAddress`<sup>Required</sup> <a name="MaxDelayedCountPerAddress" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddress"></a>

```go
func MaxDelayedCountPerAddress() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.internalValue"></a>

```go
func InternalValue() WaasWaasPolicyWafConfigAddressRateLimiting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting">WaasWaasPolicyWafConfigAddressRateLimiting</a>

---


### WaasWaasPolicyWafConfigCachingRulesCriteriaList <a name="WaasWaasPolicyWafConfigCachingRulesCriteriaList" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigCachingRulesCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaasWaasPolicyWafConfigCachingRulesCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.get"></a>

```go
func Get(index *f64) WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference <a name="WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigCachingRulesList <a name="WaasWaasPolicyWafConfigCachingRulesList" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigCachingRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaasWaasPolicyWafConfigCachingRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.get"></a>

```go
func Get(index *f64) WaasWaasPolicyWafConfigCachingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigCachingRulesOutputReference <a name="WaasWaasPolicyWafConfigCachingRulesOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigCachingRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaasWaasPolicyWafConfigCachingRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.resetCachingDuration">ResetCachingDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.resetClientCachingDuration">ResetClientCachingDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.resetIsClientCachingEnabled">ResetIsClientCachingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteria` <a name="PutCriteria" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.putCriteria"></a>

```go
func PutCriteria(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.putCriteria.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCachingDuration` <a name="ResetCachingDuration" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.resetCachingDuration"></a>

```go
func ResetCachingDuration()
```

##### `ResetClientCachingDuration` <a name="ResetClientCachingDuration" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.resetClientCachingDuration"></a>

```go
func ResetClientCachingDuration()
```

##### `ResetIsClientCachingEnabled` <a name="ResetIsClientCachingEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.resetIsClientCachingEnabled"></a>

```go
func ResetIsClientCachingEnabled()
```

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.resetKey"></a>

```go
func ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.criteria">Criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList">WaasWaasPolicyWafConfigCachingRulesCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.cachingDurationInput">CachingDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.clientCachingDurationInput">ClientCachingDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.isClientCachingEnabledInput">IsClientCachingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.cachingDuration">CachingDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.clientCachingDuration">ClientCachingDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.isClientCachingEnabled">IsClientCachingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.criteria"></a>

```go
func Criteria() WaasWaasPolicyWafConfigCachingRulesCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesCriteriaList">WaasWaasPolicyWafConfigCachingRulesCriteriaList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `CachingDurationInput`<sup>Optional</sup> <a name="CachingDurationInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.cachingDurationInput"></a>

```go
func CachingDurationInput() *string
```

- *Type:* *string

---

##### `ClientCachingDurationInput`<sup>Optional</sup> <a name="ClientCachingDurationInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.clientCachingDurationInput"></a>

```go
func ClientCachingDurationInput() *string
```

- *Type:* *string

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.criteriaInput"></a>

```go
func CriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `IsClientCachingEnabledInput`<sup>Optional</sup> <a name="IsClientCachingEnabledInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.isClientCachingEnabledInput"></a>

```go
func IsClientCachingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `CachingDuration`<sup>Required</sup> <a name="CachingDuration" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.cachingDuration"></a>

```go
func CachingDuration() *string
```

- *Type:* *string

---

##### `ClientCachingDuration`<sup>Required</sup> <a name="ClientCachingDuration" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.clientCachingDuration"></a>

```go
func ClientCachingDuration() *string
```

- *Type:* *string

---

##### `IsClientCachingEnabled`<sup>Required</sup> <a name="IsClientCachingEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.isClientCachingEnabled"></a>

```go
func IsClientCachingEnabled() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigCaptchasList <a name="WaasWaasPolicyWafConfigCaptchasList" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigCaptchasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaasWaasPolicyWafConfigCaptchasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.get"></a>

```go
func Get(index *f64) WaasWaasPolicyWafConfigCaptchasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigCaptchasOutputReference <a name="WaasWaasPolicyWafConfigCaptchasOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigCaptchasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaasWaasPolicyWafConfigCaptchasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.resetFooterText">ResetFooterText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.resetHeaderText">ResetHeaderText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFooterText` <a name="ResetFooterText" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.resetFooterText"></a>

```go
func ResetFooterText()
```

##### `ResetHeaderText` <a name="ResetHeaderText" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.resetHeaderText"></a>

```go
func ResetHeaderText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.failureMessageInput">FailureMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.footerTextInput">FooterTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.headerTextInput">HeaderTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.sessionExpirationInSecondsInput">SessionExpirationInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.submitLabelInput">SubmitLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.failureMessage">FailureMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.footerText">FooterText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.headerText">HeaderText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.sessionExpirationInSeconds">SessionExpirationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.submitLabel">SubmitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailureMessageInput`<sup>Optional</sup> <a name="FailureMessageInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.failureMessageInput"></a>

```go
func FailureMessageInput() *string
```

- *Type:* *string

---

##### `FooterTextInput`<sup>Optional</sup> <a name="FooterTextInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.footerTextInput"></a>

```go
func FooterTextInput() *string
```

- *Type:* *string

---

##### `HeaderTextInput`<sup>Optional</sup> <a name="HeaderTextInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.headerTextInput"></a>

```go
func HeaderTextInput() *string
```

- *Type:* *string

---

##### `SessionExpirationInSecondsInput`<sup>Optional</sup> <a name="SessionExpirationInSecondsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.sessionExpirationInSecondsInput"></a>

```go
func SessionExpirationInSecondsInput() *f64
```

- *Type:* *f64

---

##### `SubmitLabelInput`<sup>Optional</sup> <a name="SubmitLabelInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.submitLabelInput"></a>

```go
func SubmitLabelInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `FailureMessage`<sup>Required</sup> <a name="FailureMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.failureMessage"></a>

```go
func FailureMessage() *string
```

- *Type:* *string

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.footerText"></a>

```go
func FooterText() *string
```

- *Type:* *string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.headerText"></a>

```go
func HeaderText() *string
```

- *Type:* *string

---

##### `SessionExpirationInSeconds`<sup>Required</sup> <a name="SessionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.sessionExpirationInSeconds"></a>

```go
func SessionExpirationInSeconds() *f64
```

- *Type:* *f64

---

##### `SubmitLabel`<sup>Required</sup> <a name="SubmitLabel" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.submitLabel"></a>

```go
func SubmitLabel() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList <a name="WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get"></a>

```go
func Get(index *f64) WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference <a name="WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusions` <a name="ResetExclusions" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetTarget` <a name="ResetTarget" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusions"></a>

```go
func Exclusions() *[]*string
```

- *Type:* *[]*string

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigCustomProtectionRulesList <a name="WaasWaasPolicyWafConfigCustomProtectionRulesList" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigCustomProtectionRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaasWaasPolicyWafConfigCustomProtectionRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.get"></a>

```go
func Get(index *f64) WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference <a name="WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.putExclusions">PutExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusions` <a name="PutExclusions" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.putExclusions"></a>

```go
func PutExclusions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.putExclusions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetExclusions` <a name="ResetExclusions" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.exclusions">Exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList">WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.exclusions"></a>

```go
func Exclusions() WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList">WaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference <a name="WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetBlockAction">ResetBlockAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetBlockErrorPageCode">ResetBlockErrorPageCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetBlockErrorPageDescription">ResetBlockErrorPageDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetBlockErrorPageMessage">ResetBlockErrorPageMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetBlockResponseCode">ResetBlockResponseCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetCaptchaFooter">ResetCaptchaFooter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetCaptchaHeader">ResetCaptchaHeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetCaptchaSubmitLabel">ResetCaptchaSubmitLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetCaptchaTitle">ResetCaptchaTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockAction` <a name="ResetBlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetBlockAction"></a>

```go
func ResetBlockAction()
```

##### `ResetBlockErrorPageCode` <a name="ResetBlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetBlockErrorPageCode"></a>

```go
func ResetBlockErrorPageCode()
```

##### `ResetBlockErrorPageDescription` <a name="ResetBlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetBlockErrorPageDescription"></a>

```go
func ResetBlockErrorPageDescription()
```

##### `ResetBlockErrorPageMessage` <a name="ResetBlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetBlockErrorPageMessage"></a>

```go
func ResetBlockErrorPageMessage()
```

##### `ResetBlockResponseCode` <a name="ResetBlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetBlockResponseCode"></a>

```go
func ResetBlockResponseCode()
```

##### `ResetCaptchaFooter` <a name="ResetCaptchaFooter" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetCaptchaFooter"></a>

```go
func ResetCaptchaFooter()
```

##### `ResetCaptchaHeader` <a name="ResetCaptchaHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetCaptchaHeader"></a>

```go
func ResetCaptchaHeader()
```

##### `ResetCaptchaSubmitLabel` <a name="ResetCaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetCaptchaSubmitLabel"></a>

```go
func ResetCaptchaSubmitLabel()
```

##### `ResetCaptchaTitle` <a name="ResetCaptchaTitle" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resetCaptchaTitle"></a>

```go
func ResetCaptchaTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockActionInput">BlockActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCodeInput">BlockErrorPageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescriptionInput">BlockErrorPageDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessageInput">BlockErrorPageMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCodeInput">BlockResponseCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooterInput">CaptchaFooterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeaderInput">CaptchaHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabelInput">CaptchaSubmitLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitleInput">CaptchaTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockActionInput`<sup>Optional</sup> <a name="BlockActionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockActionInput"></a>

```go
func BlockActionInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageCodeInput`<sup>Optional</sup> <a name="BlockErrorPageCodeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCodeInput"></a>

```go
func BlockErrorPageCodeInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescriptionInput`<sup>Optional</sup> <a name="BlockErrorPageDescriptionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescriptionInput"></a>

```go
func BlockErrorPageDescriptionInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessageInput`<sup>Optional</sup> <a name="BlockErrorPageMessageInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessageInput"></a>

```go
func BlockErrorPageMessageInput() *string
```

- *Type:* *string

---

##### `BlockResponseCodeInput`<sup>Optional</sup> <a name="BlockResponseCodeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCodeInput"></a>

```go
func BlockResponseCodeInput() *f64
```

- *Type:* *f64

---

##### `CaptchaFooterInput`<sup>Optional</sup> <a name="CaptchaFooterInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooterInput"></a>

```go
func CaptchaFooterInput() *string
```

- *Type:* *string

---

##### `CaptchaHeaderInput`<sup>Optional</sup> <a name="CaptchaHeaderInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeaderInput"></a>

```go
func CaptchaHeaderInput() *string
```

- *Type:* *string

---

##### `CaptchaSubmitLabelInput`<sup>Optional</sup> <a name="CaptchaSubmitLabelInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabelInput"></a>

```go
func CaptchaSubmitLabelInput() *string
```

- *Type:* *string

---

##### `CaptchaTitleInput`<sup>Optional</sup> <a name="CaptchaTitleInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitleInput"></a>

```go
func CaptchaTitleInput() *string
```

- *Type:* *string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```go
func BlockAction() *string
```

- *Type:* *string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```go
func BlockErrorPageCode() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```go
func BlockErrorPageDescription() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```go
func BlockErrorPageMessage() *string
```

- *Type:* *string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```go
func BlockResponseCode() *f64
```

- *Type:* *f64

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```go
func CaptchaFooter() *string
```

- *Type:* *string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```go
func CaptchaHeader() *string
```

- *Type:* *string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```go
func CaptchaSubmitLabel() *string
```

- *Type:* *string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```go
func CaptchaTitle() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a>

---


### WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference <a name="WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.putChallengeSettings">PutChallengeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resetActionExpirationInSeconds">ResetActionExpirationInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resetChallengeSettings">ResetChallengeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resetFailureThresholdExpirationInSeconds">ResetFailureThresholdExpirationInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resetMaxAddressCount">ResetMaxAddressCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resetMaxAddressCountExpirationInSeconds">ResetMaxAddressCountExpirationInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChallengeSettings` <a name="PutChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.putChallengeSettings"></a>

```go
func PutChallengeSettings(value WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.putChallengeSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a>

---

##### `ResetAction` <a name="ResetAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetActionExpirationInSeconds` <a name="ResetActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resetActionExpirationInSeconds"></a>

```go
func ResetActionExpirationInSeconds()
```

##### `ResetChallengeSettings` <a name="ResetChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resetChallengeSettings"></a>

```go
func ResetChallengeSettings()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetFailureThresholdExpirationInSeconds` <a name="ResetFailureThresholdExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resetFailureThresholdExpirationInSeconds"></a>

```go
func ResetFailureThresholdExpirationInSeconds()
```

##### `ResetMaxAddressCount` <a name="ResetMaxAddressCount" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resetMaxAddressCount"></a>

```go
func ResetMaxAddressCount()
```

##### `ResetMaxAddressCountExpirationInSeconds` <a name="ResetMaxAddressCountExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resetMaxAddressCountExpirationInSeconds"></a>

```go
func ResetMaxAddressCountExpirationInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference">WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSecondsInput">ActionExpirationInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettingsInput">ChallengeSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSecondsInput">FailureThresholdExpirationInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSecondsInput">MaxAddressCountExpirationInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountInput">MaxAddressCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSeconds">FailureThresholdExpirationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCount">MaxAddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSeconds">MaxAddressCountExpirationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge">WaasWaasPolicyWafConfigDeviceFingerprintChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChallengeSettings`<sup>Required</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettings"></a>

```go
func ChallengeSettings() WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference">WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference</a>

---

##### `ActionExpirationInSecondsInput`<sup>Optional</sup> <a name="ActionExpirationInSecondsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSecondsInput"></a>

```go
func ActionExpirationInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `ChallengeSettingsInput`<sup>Optional</sup> <a name="ChallengeSettingsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettingsInput"></a>

```go
func ChallengeSettingsInput() WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">WaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a>

---

##### `FailureThresholdExpirationInSecondsInput`<sup>Optional</sup> <a name="FailureThresholdExpirationInSecondsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSecondsInput"></a>

```go
func FailureThresholdExpirationInSecondsInput() *f64
```

- *Type:* *f64

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxAddressCountExpirationInSecondsInput`<sup>Optional</sup> <a name="MaxAddressCountExpirationInSecondsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSecondsInput"></a>

```go
func MaxAddressCountExpirationInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxAddressCountInput`<sup>Optional</sup> <a name="MaxAddressCountInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountInput"></a>

```go
func MaxAddressCountInput() *f64
```

- *Type:* *f64

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `ActionExpirationInSeconds`<sup>Required</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSeconds"></a>

```go
func ActionExpirationInSeconds() *f64
```

- *Type:* *f64

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `FailureThresholdExpirationInSeconds`<sup>Required</sup> <a name="FailureThresholdExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSeconds"></a>

```go
func FailureThresholdExpirationInSeconds() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `MaxAddressCount`<sup>Required</sup> <a name="MaxAddressCount" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCount"></a>

```go
func MaxAddressCount() *f64
```

- *Type:* *f64

---

##### `MaxAddressCountExpirationInSeconds`<sup>Required</sup> <a name="MaxAddressCountExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSeconds"></a>

```go
func MaxAddressCountExpirationInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.internalValue"></a>

```go
func InternalValue() WaasWaasPolicyWafConfigDeviceFingerprintChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge">WaasWaasPolicyWafConfigDeviceFingerprintChallenge</a>

---


### WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference <a name="WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetBlockAction">ResetBlockAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetBlockErrorPageCode">ResetBlockErrorPageCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetBlockErrorPageDescription">ResetBlockErrorPageDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetBlockErrorPageMessage">ResetBlockErrorPageMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetBlockResponseCode">ResetBlockResponseCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetCaptchaFooter">ResetCaptchaFooter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetCaptchaHeader">ResetCaptchaHeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetCaptchaSubmitLabel">ResetCaptchaSubmitLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetCaptchaTitle">ResetCaptchaTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockAction` <a name="ResetBlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetBlockAction"></a>

```go
func ResetBlockAction()
```

##### `ResetBlockErrorPageCode` <a name="ResetBlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetBlockErrorPageCode"></a>

```go
func ResetBlockErrorPageCode()
```

##### `ResetBlockErrorPageDescription` <a name="ResetBlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetBlockErrorPageDescription"></a>

```go
func ResetBlockErrorPageDescription()
```

##### `ResetBlockErrorPageMessage` <a name="ResetBlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetBlockErrorPageMessage"></a>

```go
func ResetBlockErrorPageMessage()
```

##### `ResetBlockResponseCode` <a name="ResetBlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetBlockResponseCode"></a>

```go
func ResetBlockResponseCode()
```

##### `ResetCaptchaFooter` <a name="ResetCaptchaFooter" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetCaptchaFooter"></a>

```go
func ResetCaptchaFooter()
```

##### `ResetCaptchaHeader` <a name="ResetCaptchaHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetCaptchaHeader"></a>

```go
func ResetCaptchaHeader()
```

##### `ResetCaptchaSubmitLabel` <a name="ResetCaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetCaptchaSubmitLabel"></a>

```go
func ResetCaptchaSubmitLabel()
```

##### `ResetCaptchaTitle` <a name="ResetCaptchaTitle" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resetCaptchaTitle"></a>

```go
func ResetCaptchaTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockActionInput">BlockActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCodeInput">BlockErrorPageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescriptionInput">BlockErrorPageDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessageInput">BlockErrorPageMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCodeInput">BlockResponseCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooterInput">CaptchaFooterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeaderInput">CaptchaHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabelInput">CaptchaSubmitLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitleInput">CaptchaTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockActionInput`<sup>Optional</sup> <a name="BlockActionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockActionInput"></a>

```go
func BlockActionInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageCodeInput`<sup>Optional</sup> <a name="BlockErrorPageCodeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCodeInput"></a>

```go
func BlockErrorPageCodeInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescriptionInput`<sup>Optional</sup> <a name="BlockErrorPageDescriptionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescriptionInput"></a>

```go
func BlockErrorPageDescriptionInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessageInput`<sup>Optional</sup> <a name="BlockErrorPageMessageInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessageInput"></a>

```go
func BlockErrorPageMessageInput() *string
```

- *Type:* *string

---

##### `BlockResponseCodeInput`<sup>Optional</sup> <a name="BlockResponseCodeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCodeInput"></a>

```go
func BlockResponseCodeInput() *f64
```

- *Type:* *f64

---

##### `CaptchaFooterInput`<sup>Optional</sup> <a name="CaptchaFooterInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooterInput"></a>

```go
func CaptchaFooterInput() *string
```

- *Type:* *string

---

##### `CaptchaHeaderInput`<sup>Optional</sup> <a name="CaptchaHeaderInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeaderInput"></a>

```go
func CaptchaHeaderInput() *string
```

- *Type:* *string

---

##### `CaptchaSubmitLabelInput`<sup>Optional</sup> <a name="CaptchaSubmitLabelInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabelInput"></a>

```go
func CaptchaSubmitLabelInput() *string
```

- *Type:* *string

---

##### `CaptchaTitleInput`<sup>Optional</sup> <a name="CaptchaTitleInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitleInput"></a>

```go
func CaptchaTitleInput() *string
```

- *Type:* *string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```go
func BlockAction() *string
```

- *Type:* *string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```go
func BlockErrorPageCode() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```go
func BlockErrorPageDescription() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```go
func BlockErrorPageMessage() *string
```

- *Type:* *string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```go
func BlockResponseCode() *f64
```

- *Type:* *f64

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```go
func CaptchaFooter() *string
```

- *Type:* *string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```go
func CaptchaHeader() *string
```

- *Type:* *string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```go
func CaptchaSubmitLabel() *string
```

- *Type:* *string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```go
func CaptchaTitle() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a>

---


### WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference <a name="WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.putChallengeSettings">PutChallengeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.putSetHttpHeader">PutSetHttpHeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetActionExpirationInSeconds">ResetActionExpirationInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetChallengeSettings">ResetChallengeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetFailureThresholdExpirationInSeconds">ResetFailureThresholdExpirationInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetInteractionThreshold">ResetInteractionThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetIsNatEnabled">ResetIsNatEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetRecordingPeriodInSeconds">ResetRecordingPeriodInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetSetHttpHeader">ResetSetHttpHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChallengeSettings` <a name="PutChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.putChallengeSettings"></a>

```go
func PutChallengeSettings(value WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.putChallengeSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a>

---

##### `PutSetHttpHeader` <a name="PutSetHttpHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.putSetHttpHeader"></a>

```go
func PutSetHttpHeader(value WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.putSetHttpHeader.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a>

---

##### `ResetAction` <a name="ResetAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetActionExpirationInSeconds` <a name="ResetActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetActionExpirationInSeconds"></a>

```go
func ResetActionExpirationInSeconds()
```

##### `ResetChallengeSettings` <a name="ResetChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetChallengeSettings"></a>

```go
func ResetChallengeSettings()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetFailureThresholdExpirationInSeconds` <a name="ResetFailureThresholdExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetFailureThresholdExpirationInSeconds"></a>

```go
func ResetFailureThresholdExpirationInSeconds()
```

##### `ResetInteractionThreshold` <a name="ResetInteractionThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetInteractionThreshold"></a>

```go
func ResetInteractionThreshold()
```

##### `ResetIsNatEnabled` <a name="ResetIsNatEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetIsNatEnabled"></a>

```go
func ResetIsNatEnabled()
```

##### `ResetRecordingPeriodInSeconds` <a name="ResetRecordingPeriodInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetRecordingPeriodInSeconds"></a>

```go
func ResetRecordingPeriodInSeconds()
```

##### `ResetSetHttpHeader` <a name="ResetSetHttpHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resetSetHttpHeader"></a>

```go
func ResetSetHttpHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference">WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeader">SetHttpHeader</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference">WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSecondsInput">ActionExpirationInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.challengeSettingsInput">ChallengeSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSecondsInput">FailureThresholdExpirationInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.interactionThresholdInput">InteractionThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabledInput">IsNatEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSecondsInput">RecordingPeriodInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeaderInput">SetHttpHeaderInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSeconds">FailureThresholdExpirationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.interactionThreshold">InteractionThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabled">IsNatEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSeconds">RecordingPeriodInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge">WaasWaasPolicyWafConfigHumanInteractionChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChallengeSettings`<sup>Required</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.challengeSettings"></a>

```go
func ChallengeSettings() WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference">WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference</a>

---

##### `SetHttpHeader`<sup>Required</sup> <a name="SetHttpHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeader"></a>

```go
func SetHttpHeader() WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference">WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference</a>

---

##### `ActionExpirationInSecondsInput`<sup>Optional</sup> <a name="ActionExpirationInSecondsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSecondsInput"></a>

```go
func ActionExpirationInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `ChallengeSettingsInput`<sup>Optional</sup> <a name="ChallengeSettingsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.challengeSettingsInput"></a>

```go
func ChallengeSettingsInput() WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">WaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a>

---

##### `FailureThresholdExpirationInSecondsInput`<sup>Optional</sup> <a name="FailureThresholdExpirationInSecondsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSecondsInput"></a>

```go
func FailureThresholdExpirationInSecondsInput() *f64
```

- *Type:* *f64

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `InteractionThresholdInput`<sup>Optional</sup> <a name="InteractionThresholdInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.interactionThresholdInput"></a>

```go
func InteractionThresholdInput() *f64
```

- *Type:* *f64

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsNatEnabledInput`<sup>Optional</sup> <a name="IsNatEnabledInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabledInput"></a>

```go
func IsNatEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RecordingPeriodInSecondsInput`<sup>Optional</sup> <a name="RecordingPeriodInSecondsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSecondsInput"></a>

```go
func RecordingPeriodInSecondsInput() *f64
```

- *Type:* *f64

---

##### `SetHttpHeaderInput`<sup>Optional</sup> <a name="SetHttpHeaderInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeaderInput"></a>

```go
func SetHttpHeaderInput() WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `ActionExpirationInSeconds`<sup>Required</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSeconds"></a>

```go
func ActionExpirationInSeconds() *f64
```

- *Type:* *f64

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `FailureThresholdExpirationInSeconds`<sup>Required</sup> <a name="FailureThresholdExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSeconds"></a>

```go
func FailureThresholdExpirationInSeconds() *f64
```

- *Type:* *f64

---

##### `InteractionThreshold`<sup>Required</sup> <a name="InteractionThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.interactionThreshold"></a>

```go
func InteractionThreshold() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsNatEnabled`<sup>Required</sup> <a name="IsNatEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabled"></a>

```go
func IsNatEnabled() interface{}
```

- *Type:* interface{}

---

##### `RecordingPeriodInSeconds`<sup>Required</sup> <a name="RecordingPeriodInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSeconds"></a>

```go
func RecordingPeriodInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.internalValue"></a>

```go
func InternalValue() WaasWaasPolicyWafConfigHumanInteractionChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge">WaasWaasPolicyWafConfigHumanInteractionChallenge</a>

---


### WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference <a name="WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">WaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a>

---


### WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference <a name="WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetBlockAction">ResetBlockAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetBlockErrorPageCode">ResetBlockErrorPageCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetBlockErrorPageDescription">ResetBlockErrorPageDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetBlockErrorPageMessage">ResetBlockErrorPageMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetBlockResponseCode">ResetBlockResponseCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetCaptchaFooter">ResetCaptchaFooter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetCaptchaHeader">ResetCaptchaHeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetCaptchaSubmitLabel">ResetCaptchaSubmitLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetCaptchaTitle">ResetCaptchaTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockAction` <a name="ResetBlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetBlockAction"></a>

```go
func ResetBlockAction()
```

##### `ResetBlockErrorPageCode` <a name="ResetBlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetBlockErrorPageCode"></a>

```go
func ResetBlockErrorPageCode()
```

##### `ResetBlockErrorPageDescription` <a name="ResetBlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetBlockErrorPageDescription"></a>

```go
func ResetBlockErrorPageDescription()
```

##### `ResetBlockErrorPageMessage` <a name="ResetBlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetBlockErrorPageMessage"></a>

```go
func ResetBlockErrorPageMessage()
```

##### `ResetBlockResponseCode` <a name="ResetBlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetBlockResponseCode"></a>

```go
func ResetBlockResponseCode()
```

##### `ResetCaptchaFooter` <a name="ResetCaptchaFooter" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetCaptchaFooter"></a>

```go
func ResetCaptchaFooter()
```

##### `ResetCaptchaHeader` <a name="ResetCaptchaHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetCaptchaHeader"></a>

```go
func ResetCaptchaHeader()
```

##### `ResetCaptchaSubmitLabel` <a name="ResetCaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetCaptchaSubmitLabel"></a>

```go
func ResetCaptchaSubmitLabel()
```

##### `ResetCaptchaTitle` <a name="ResetCaptchaTitle" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resetCaptchaTitle"></a>

```go
func ResetCaptchaTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockActionInput">BlockActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCodeInput">BlockErrorPageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescriptionInput">BlockErrorPageDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessageInput">BlockErrorPageMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCodeInput">BlockResponseCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooterInput">CaptchaFooterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeaderInput">CaptchaHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabelInput">CaptchaSubmitLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitleInput">CaptchaTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooter">CaptchaFooter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeader">CaptchaHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">CaptchaSubmitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitle">CaptchaTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings">WaasWaasPolicyWafConfigJsChallengeChallengeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockActionInput`<sup>Optional</sup> <a name="BlockActionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockActionInput"></a>

```go
func BlockActionInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageCodeInput`<sup>Optional</sup> <a name="BlockErrorPageCodeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCodeInput"></a>

```go
func BlockErrorPageCodeInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescriptionInput`<sup>Optional</sup> <a name="BlockErrorPageDescriptionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescriptionInput"></a>

```go
func BlockErrorPageDescriptionInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessageInput`<sup>Optional</sup> <a name="BlockErrorPageMessageInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessageInput"></a>

```go
func BlockErrorPageMessageInput() *string
```

- *Type:* *string

---

##### `BlockResponseCodeInput`<sup>Optional</sup> <a name="BlockResponseCodeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCodeInput"></a>

```go
func BlockResponseCodeInput() *f64
```

- *Type:* *f64

---

##### `CaptchaFooterInput`<sup>Optional</sup> <a name="CaptchaFooterInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooterInput"></a>

```go
func CaptchaFooterInput() *string
```

- *Type:* *string

---

##### `CaptchaHeaderInput`<sup>Optional</sup> <a name="CaptchaHeaderInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeaderInput"></a>

```go
func CaptchaHeaderInput() *string
```

- *Type:* *string

---

##### `CaptchaSubmitLabelInput`<sup>Optional</sup> <a name="CaptchaSubmitLabelInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabelInput"></a>

```go
func CaptchaSubmitLabelInput() *string
```

- *Type:* *string

---

##### `CaptchaTitleInput`<sup>Optional</sup> <a name="CaptchaTitleInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitleInput"></a>

```go
func CaptchaTitleInput() *string
```

- *Type:* *string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```go
func BlockAction() *string
```

- *Type:* *string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```go
func BlockErrorPageCode() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```go
func BlockErrorPageDescription() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```go
func BlockErrorPageMessage() *string
```

- *Type:* *string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```go
func BlockResponseCode() *f64
```

- *Type:* *f64

---

##### `CaptchaFooter`<sup>Required</sup> <a name="CaptchaFooter" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```go
func CaptchaFooter() *string
```

- *Type:* *string

---

##### `CaptchaHeader`<sup>Required</sup> <a name="CaptchaHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```go
func CaptchaHeader() *string
```

- *Type:* *string

---

##### `CaptchaSubmitLabel`<sup>Required</sup> <a name="CaptchaSubmitLabel" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```go
func CaptchaSubmitLabel() *string
```

- *Type:* *string

---

##### `CaptchaTitle`<sup>Required</sup> <a name="CaptchaTitle" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```go
func CaptchaTitle() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() WaasWaasPolicyWafConfigJsChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings">WaasWaasPolicyWafConfigJsChallengeChallengeSettings</a>

---


### WaasWaasPolicyWafConfigJsChallengeCriteriaList <a name="WaasWaasPolicyWafConfigJsChallengeCriteriaList" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigJsChallengeCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaasWaasPolicyWafConfigJsChallengeCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.get"></a>

```go
func Get(index *f64) WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference <a name="WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resetIsCaseSensitive">ResetIsCaseSensitive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsCaseSensitive` <a name="ResetIsCaseSensitive" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resetIsCaseSensitive"></a>

```go
func ResetIsCaseSensitive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitiveInput">IsCaseSensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitive">IsCaseSensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `IsCaseSensitiveInput`<sup>Optional</sup> <a name="IsCaseSensitiveInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitiveInput"></a>

```go
func IsCaseSensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `IsCaseSensitive`<sup>Required</sup> <a name="IsCaseSensitive" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitive"></a>

```go
func IsCaseSensitive() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigJsChallengeOutputReference <a name="WaasWaasPolicyWafConfigJsChallengeOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigJsChallengeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyWafConfigJsChallengeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.putChallengeSettings">PutChallengeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.putSetHttpHeader">PutSetHttpHeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetActionExpirationInSeconds">ResetActionExpirationInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetAreRedirectsChallenged">ResetAreRedirectsChallenged</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetChallengeSettings">ResetChallengeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetCriteria">ResetCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetIsNatEnabled">ResetIsNatEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetSetHttpHeader">ResetSetHttpHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChallengeSettings` <a name="PutChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.putChallengeSettings"></a>

```go
func PutChallengeSettings(value WaasWaasPolicyWafConfigJsChallengeChallengeSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.putChallengeSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings">WaasWaasPolicyWafConfigJsChallengeChallengeSettings</a>

---

##### `PutCriteria` <a name="PutCriteria" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.putCriteria"></a>

```go
func PutCriteria(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.putCriteria.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSetHttpHeader` <a name="PutSetHttpHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.putSetHttpHeader"></a>

```go
func PutSetHttpHeader(value WaasWaasPolicyWafConfigJsChallengeSetHttpHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.putSetHttpHeader.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader">WaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a>

---

##### `ResetAction` <a name="ResetAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetActionExpirationInSeconds` <a name="ResetActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetActionExpirationInSeconds"></a>

```go
func ResetActionExpirationInSeconds()
```

##### `ResetAreRedirectsChallenged` <a name="ResetAreRedirectsChallenged" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetAreRedirectsChallenged"></a>

```go
func ResetAreRedirectsChallenged()
```

##### `ResetChallengeSettings` <a name="ResetChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetChallengeSettings"></a>

```go
func ResetChallengeSettings()
```

##### `ResetCriteria` <a name="ResetCriteria" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetCriteria"></a>

```go
func ResetCriteria()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetIsNatEnabled` <a name="ResetIsNatEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetIsNatEnabled"></a>

```go
func ResetIsNatEnabled()
```

##### `ResetSetHttpHeader` <a name="ResetSetHttpHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.resetSetHttpHeader"></a>

```go
func ResetSetHttpHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.challengeSettings">ChallengeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference">WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.criteria">Criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList">WaasWaasPolicyWafConfigJsChallengeCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.setHttpHeader">SetHttpHeader</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference">WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.actionExpirationInSecondsInput">ActionExpirationInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.areRedirectsChallengedInput">AreRedirectsChallengedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.challengeSettingsInput">ChallengeSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings">WaasWaasPolicyWafConfigJsChallengeChallengeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.isNatEnabledInput">IsNatEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.setHttpHeaderInput">SetHttpHeaderInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader">WaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.actionExpirationInSeconds">ActionExpirationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.areRedirectsChallenged">AreRedirectsChallenged</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.isNatEnabled">IsNatEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge">WaasWaasPolicyWafConfigJsChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChallengeSettings`<sup>Required</sup> <a name="ChallengeSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.challengeSettings"></a>

```go
func ChallengeSettings() WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference">WaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference</a>

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.criteria"></a>

```go
func Criteria() WaasWaasPolicyWafConfigJsChallengeCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeCriteriaList">WaasWaasPolicyWafConfigJsChallengeCriteriaList</a>

---

##### `SetHttpHeader`<sup>Required</sup> <a name="SetHttpHeader" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.setHttpHeader"></a>

```go
func SetHttpHeader() WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference">WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference</a>

---

##### `ActionExpirationInSecondsInput`<sup>Optional</sup> <a name="ActionExpirationInSecondsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.actionExpirationInSecondsInput"></a>

```go
func ActionExpirationInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `AreRedirectsChallengedInput`<sup>Optional</sup> <a name="AreRedirectsChallengedInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.areRedirectsChallengedInput"></a>

```go
func AreRedirectsChallengedInput() interface{}
```

- *Type:* interface{}

---

##### `ChallengeSettingsInput`<sup>Optional</sup> <a name="ChallengeSettingsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.challengeSettingsInput"></a>

```go
func ChallengeSettingsInput() WaasWaasPolicyWafConfigJsChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeChallengeSettings">WaasWaasPolicyWafConfigJsChallengeChallengeSettings</a>

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.criteriaInput"></a>

```go
func CriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsNatEnabledInput`<sup>Optional</sup> <a name="IsNatEnabledInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.isNatEnabledInput"></a>

```go
func IsNatEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SetHttpHeaderInput`<sup>Optional</sup> <a name="SetHttpHeaderInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.setHttpHeaderInput"></a>

```go
func SetHttpHeaderInput() WaasWaasPolicyWafConfigJsChallengeSetHttpHeader
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader">WaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `ActionExpirationInSeconds`<sup>Required</sup> <a name="ActionExpirationInSeconds" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.actionExpirationInSeconds"></a>

```go
func ActionExpirationInSeconds() *f64
```

- *Type:* *f64

---

##### `AreRedirectsChallenged`<sup>Required</sup> <a name="AreRedirectsChallenged" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.areRedirectsChallenged"></a>

```go
func AreRedirectsChallenged() interface{}
```

- *Type:* interface{}

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsNatEnabled`<sup>Required</sup> <a name="IsNatEnabled" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.isNatEnabled"></a>

```go
func IsNatEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference.property.internalValue"></a>

```go
func InternalValue() WaasWaasPolicyWafConfigJsChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge">WaasWaasPolicyWafConfigJsChallenge</a>

---


### WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference <a name="WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader">WaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() WaasWaasPolicyWafConfigJsChallengeSetHttpHeader
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeSetHttpHeader">WaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a>

---


### WaasWaasPolicyWafConfigOutputReference <a name="WaasWaasPolicyWafConfigOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyWafConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putAccessRules">PutAccessRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putAddressRateLimiting">PutAddressRateLimiting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putCachingRules">PutCachingRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putCaptchas">PutCaptchas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putCustomProtectionRules">PutCustomProtectionRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putDeviceFingerprintChallenge">PutDeviceFingerprintChallenge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putHumanInteractionChallenge">PutHumanInteractionChallenge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putJsChallenge">PutJsChallenge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putProtectionSettings">PutProtectionSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putWhitelists">PutWhitelists</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetAccessRules">ResetAccessRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetAddressRateLimiting">ResetAddressRateLimiting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetCachingRules">ResetCachingRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetCaptchas">ResetCaptchas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetCustomProtectionRules">ResetCustomProtectionRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetDeviceFingerprintChallenge">ResetDeviceFingerprintChallenge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetHumanInteractionChallenge">ResetHumanInteractionChallenge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetJsChallenge">ResetJsChallenge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetOriginGroups">ResetOriginGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetProtectionSettings">ResetProtectionSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetWhitelists">ResetWhitelists</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessRules` <a name="PutAccessRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putAccessRules"></a>

```go
func PutAccessRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putAccessRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAddressRateLimiting` <a name="PutAddressRateLimiting" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putAddressRateLimiting"></a>

```go
func PutAddressRateLimiting(value WaasWaasPolicyWafConfigAddressRateLimiting)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putAddressRateLimiting.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting">WaasWaasPolicyWafConfigAddressRateLimiting</a>

---

##### `PutCachingRules` <a name="PutCachingRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putCachingRules"></a>

```go
func PutCachingRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putCachingRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCaptchas` <a name="PutCaptchas" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putCaptchas"></a>

```go
func PutCaptchas(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putCaptchas.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCustomProtectionRules` <a name="PutCustomProtectionRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putCustomProtectionRules"></a>

```go
func PutCustomProtectionRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putCustomProtectionRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeviceFingerprintChallenge` <a name="PutDeviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putDeviceFingerprintChallenge"></a>

```go
func PutDeviceFingerprintChallenge(value WaasWaasPolicyWafConfigDeviceFingerprintChallenge)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putDeviceFingerprintChallenge.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge">WaasWaasPolicyWafConfigDeviceFingerprintChallenge</a>

---

##### `PutHumanInteractionChallenge` <a name="PutHumanInteractionChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putHumanInteractionChallenge"></a>

```go
func PutHumanInteractionChallenge(value WaasWaasPolicyWafConfigHumanInteractionChallenge)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putHumanInteractionChallenge.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge">WaasWaasPolicyWafConfigHumanInteractionChallenge</a>

---

##### `PutJsChallenge` <a name="PutJsChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putJsChallenge"></a>

```go
func PutJsChallenge(value WaasWaasPolicyWafConfigJsChallenge)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putJsChallenge.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge">WaasWaasPolicyWafConfigJsChallenge</a>

---

##### `PutProtectionSettings` <a name="PutProtectionSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putProtectionSettings"></a>

```go
func PutProtectionSettings(value WaasWaasPolicyWafConfigProtectionSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putProtectionSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings">WaasWaasPolicyWafConfigProtectionSettings</a>

---

##### `PutWhitelists` <a name="PutWhitelists" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putWhitelists"></a>

```go
func PutWhitelists(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.putWhitelists.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessRules` <a name="ResetAccessRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetAccessRules"></a>

```go
func ResetAccessRules()
```

##### `ResetAddressRateLimiting` <a name="ResetAddressRateLimiting" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetAddressRateLimiting"></a>

```go
func ResetAddressRateLimiting()
```

##### `ResetCachingRules` <a name="ResetCachingRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetCachingRules"></a>

```go
func ResetCachingRules()
```

##### `ResetCaptchas` <a name="ResetCaptchas" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetCaptchas"></a>

```go
func ResetCaptchas()
```

##### `ResetCustomProtectionRules` <a name="ResetCustomProtectionRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetCustomProtectionRules"></a>

```go
func ResetCustomProtectionRules()
```

##### `ResetDeviceFingerprintChallenge` <a name="ResetDeviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetDeviceFingerprintChallenge"></a>

```go
func ResetDeviceFingerprintChallenge()
```

##### `ResetHumanInteractionChallenge` <a name="ResetHumanInteractionChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetHumanInteractionChallenge"></a>

```go
func ResetHumanInteractionChallenge()
```

##### `ResetJsChallenge` <a name="ResetJsChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetJsChallenge"></a>

```go
func ResetJsChallenge()
```

##### `ResetOrigin` <a name="ResetOrigin" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetOrigin"></a>

```go
func ResetOrigin()
```

##### `ResetOriginGroups` <a name="ResetOriginGroups" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetOriginGroups"></a>

```go
func ResetOriginGroups()
```

##### `ResetProtectionSettings` <a name="ResetProtectionSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetProtectionSettings"></a>

```go
func ResetProtectionSettings()
```

##### `ResetWhitelists` <a name="ResetWhitelists" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.resetWhitelists"></a>

```go
func ResetWhitelists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.accessRules">AccessRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList">WaasWaasPolicyWafConfigAccessRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.addressRateLimiting">AddressRateLimiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference">WaasWaasPolicyWafConfigAddressRateLimitingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.cachingRules">CachingRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList">WaasWaasPolicyWafConfigCachingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.captchas">Captchas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList">WaasWaasPolicyWafConfigCaptchasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.customProtectionRules">CustomProtectionRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList">WaasWaasPolicyWafConfigCustomProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.deviceFingerprintChallenge">DeviceFingerprintChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference">WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.humanInteractionChallenge">HumanInteractionChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference">WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.jsChallenge">JsChallenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference">WaasWaasPolicyWafConfigJsChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.protectionSettings">ProtectionSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference">WaasWaasPolicyWafConfigProtectionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.whitelists">Whitelists</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList">WaasWaasPolicyWafConfigWhitelistsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.accessRulesInput">AccessRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.addressRateLimitingInput">AddressRateLimitingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting">WaasWaasPolicyWafConfigAddressRateLimiting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.cachingRulesInput">CachingRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.captchasInput">CaptchasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.customProtectionRulesInput">CustomProtectionRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.deviceFingerprintChallengeInput">DeviceFingerprintChallengeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge">WaasWaasPolicyWafConfigDeviceFingerprintChallenge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.humanInteractionChallengeInput">HumanInteractionChallengeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge">WaasWaasPolicyWafConfigHumanInteractionChallenge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.jsChallengeInput">JsChallengeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge">WaasWaasPolicyWafConfigJsChallenge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.originGroupsInput">OriginGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.originInput">OriginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.protectionSettingsInput">ProtectionSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings">WaasWaasPolicyWafConfigProtectionSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.whitelistsInput">WhitelistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.originGroups">OriginGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig">WaasWaasPolicyWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessRules`<sup>Required</sup> <a name="AccessRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.accessRules"></a>

```go
func AccessRules() WaasWaasPolicyWafConfigAccessRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAccessRulesList">WaasWaasPolicyWafConfigAccessRulesList</a>

---

##### `AddressRateLimiting`<sup>Required</sup> <a name="AddressRateLimiting" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.addressRateLimiting"></a>

```go
func AddressRateLimiting() WaasWaasPolicyWafConfigAddressRateLimitingOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimitingOutputReference">WaasWaasPolicyWafConfigAddressRateLimitingOutputReference</a>

---

##### `CachingRules`<sup>Required</sup> <a name="CachingRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.cachingRules"></a>

```go
func CachingRules() WaasWaasPolicyWafConfigCachingRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCachingRulesList">WaasWaasPolicyWafConfigCachingRulesList</a>

---

##### `Captchas`<sup>Required</sup> <a name="Captchas" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.captchas"></a>

```go
func Captchas() WaasWaasPolicyWafConfigCaptchasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCaptchasList">WaasWaasPolicyWafConfigCaptchasList</a>

---

##### `CustomProtectionRules`<sup>Required</sup> <a name="CustomProtectionRules" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.customProtectionRules"></a>

```go
func CustomProtectionRules() WaasWaasPolicyWafConfigCustomProtectionRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigCustomProtectionRulesList">WaasWaasPolicyWafConfigCustomProtectionRulesList</a>

---

##### `DeviceFingerprintChallenge`<sup>Required</sup> <a name="DeviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.deviceFingerprintChallenge"></a>

```go
func DeviceFingerprintChallenge() WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference">WaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference</a>

---

##### `HumanInteractionChallenge`<sup>Required</sup> <a name="HumanInteractionChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.humanInteractionChallenge"></a>

```go
func HumanInteractionChallenge() WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference">WaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference</a>

---

##### `JsChallenge`<sup>Required</sup> <a name="JsChallenge" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.jsChallenge"></a>

```go
func JsChallenge() WaasWaasPolicyWafConfigJsChallengeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallengeOutputReference">WaasWaasPolicyWafConfigJsChallengeOutputReference</a>

---

##### `ProtectionSettings`<sup>Required</sup> <a name="ProtectionSettings" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.protectionSettings"></a>

```go
func ProtectionSettings() WaasWaasPolicyWafConfigProtectionSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference">WaasWaasPolicyWafConfigProtectionSettingsOutputReference</a>

---

##### `Whitelists`<sup>Required</sup> <a name="Whitelists" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.whitelists"></a>

```go
func Whitelists() WaasWaasPolicyWafConfigWhitelistsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList">WaasWaasPolicyWafConfigWhitelistsList</a>

---

##### `AccessRulesInput`<sup>Optional</sup> <a name="AccessRulesInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.accessRulesInput"></a>

```go
func AccessRulesInput() interface{}
```

- *Type:* interface{}

---

##### `AddressRateLimitingInput`<sup>Optional</sup> <a name="AddressRateLimitingInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.addressRateLimitingInput"></a>

```go
func AddressRateLimitingInput() WaasWaasPolicyWafConfigAddressRateLimiting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigAddressRateLimiting">WaasWaasPolicyWafConfigAddressRateLimiting</a>

---

##### `CachingRulesInput`<sup>Optional</sup> <a name="CachingRulesInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.cachingRulesInput"></a>

```go
func CachingRulesInput() interface{}
```

- *Type:* interface{}

---

##### `CaptchasInput`<sup>Optional</sup> <a name="CaptchasInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.captchasInput"></a>

```go
func CaptchasInput() interface{}
```

- *Type:* interface{}

---

##### `CustomProtectionRulesInput`<sup>Optional</sup> <a name="CustomProtectionRulesInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.customProtectionRulesInput"></a>

```go
func CustomProtectionRulesInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceFingerprintChallengeInput`<sup>Optional</sup> <a name="DeviceFingerprintChallengeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.deviceFingerprintChallengeInput"></a>

```go
func DeviceFingerprintChallengeInput() WaasWaasPolicyWafConfigDeviceFingerprintChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigDeviceFingerprintChallenge">WaasWaasPolicyWafConfigDeviceFingerprintChallenge</a>

---

##### `HumanInteractionChallengeInput`<sup>Optional</sup> <a name="HumanInteractionChallengeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.humanInteractionChallengeInput"></a>

```go
func HumanInteractionChallengeInput() WaasWaasPolicyWafConfigHumanInteractionChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigHumanInteractionChallenge">WaasWaasPolicyWafConfigHumanInteractionChallenge</a>

---

##### `JsChallengeInput`<sup>Optional</sup> <a name="JsChallengeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.jsChallengeInput"></a>

```go
func JsChallengeInput() WaasWaasPolicyWafConfigJsChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigJsChallenge">WaasWaasPolicyWafConfigJsChallenge</a>

---

##### `OriginGroupsInput`<sup>Optional</sup> <a name="OriginGroupsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.originGroupsInput"></a>

```go
func OriginGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.originInput"></a>

```go
func OriginInput() *string
```

- *Type:* *string

---

##### `ProtectionSettingsInput`<sup>Optional</sup> <a name="ProtectionSettingsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.protectionSettingsInput"></a>

```go
func ProtectionSettingsInput() WaasWaasPolicyWafConfigProtectionSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings">WaasWaasPolicyWafConfigProtectionSettings</a>

---

##### `WhitelistsInput`<sup>Optional</sup> <a name="WhitelistsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.whitelistsInput"></a>

```go
func WhitelistsInput() interface{}
```

- *Type:* interface{}

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `OriginGroups`<sup>Required</sup> <a name="OriginGroups" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.originGroups"></a>

```go
func OriginGroups() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() WaasWaasPolicyWafConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfig">WaasWaasPolicyWafConfig</a>

---


### WaasWaasPolicyWafConfigProtectionSettingsOutputReference <a name="WaasWaasPolicyWafConfigProtectionSettingsOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigProtectionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WaasWaasPolicyWafConfigProtectionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetAllowedHttpMethods">ResetAllowedHttpMethods</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetBlockAction">ResetBlockAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetBlockErrorPageCode">ResetBlockErrorPageCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetBlockErrorPageDescription">ResetBlockErrorPageDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetBlockErrorPageMessage">ResetBlockErrorPageMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetBlockResponseCode">ResetBlockResponseCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetIsResponseInspected">ResetIsResponseInspected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetMaxArgumentCount">ResetMaxArgumentCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetMaxNameLengthPerArgument">ResetMaxNameLengthPerArgument</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetMaxResponseSizeInKiB">ResetMaxResponseSizeInKiB</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetMaxTotalNameLengthOfArguments">ResetMaxTotalNameLengthOfArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetMediaTypes">ResetMediaTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetRecommendationsPeriodInDays">ResetRecommendationsPeriodInDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedHttpMethods` <a name="ResetAllowedHttpMethods" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetAllowedHttpMethods"></a>

```go
func ResetAllowedHttpMethods()
```

##### `ResetBlockAction` <a name="ResetBlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetBlockAction"></a>

```go
func ResetBlockAction()
```

##### `ResetBlockErrorPageCode` <a name="ResetBlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetBlockErrorPageCode"></a>

```go
func ResetBlockErrorPageCode()
```

##### `ResetBlockErrorPageDescription` <a name="ResetBlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetBlockErrorPageDescription"></a>

```go
func ResetBlockErrorPageDescription()
```

##### `ResetBlockErrorPageMessage` <a name="ResetBlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetBlockErrorPageMessage"></a>

```go
func ResetBlockErrorPageMessage()
```

##### `ResetBlockResponseCode` <a name="ResetBlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetBlockResponseCode"></a>

```go
func ResetBlockResponseCode()
```

##### `ResetIsResponseInspected` <a name="ResetIsResponseInspected" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetIsResponseInspected"></a>

```go
func ResetIsResponseInspected()
```

##### `ResetMaxArgumentCount` <a name="ResetMaxArgumentCount" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetMaxArgumentCount"></a>

```go
func ResetMaxArgumentCount()
```

##### `ResetMaxNameLengthPerArgument` <a name="ResetMaxNameLengthPerArgument" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetMaxNameLengthPerArgument"></a>

```go
func ResetMaxNameLengthPerArgument()
```

##### `ResetMaxResponseSizeInKiB` <a name="ResetMaxResponseSizeInKiB" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetMaxResponseSizeInKiB"></a>

```go
func ResetMaxResponseSizeInKiB()
```

##### `ResetMaxTotalNameLengthOfArguments` <a name="ResetMaxTotalNameLengthOfArguments" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetMaxTotalNameLengthOfArguments"></a>

```go
func ResetMaxTotalNameLengthOfArguments()
```

##### `ResetMediaTypes` <a name="ResetMediaTypes" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetMediaTypes"></a>

```go
func ResetMediaTypes()
```

##### `ResetRecommendationsPeriodInDays` <a name="ResetRecommendationsPeriodInDays" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.resetRecommendationsPeriodInDays"></a>

```go
func ResetRecommendationsPeriodInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.allowedHttpMethodsInput">AllowedHttpMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockActionInput">BlockActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageCodeInput">BlockErrorPageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescriptionInput">BlockErrorPageDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessageInput">BlockErrorPageMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockResponseCodeInput">BlockResponseCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.isResponseInspectedInput">IsResponseInspectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxArgumentCountInput">MaxArgumentCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgumentInput">MaxNameLengthPerArgumentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiBInput">MaxResponseSizeInKiBInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArgumentsInput">MaxTotalNameLengthOfArgumentsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.mediaTypesInput">MediaTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDaysInput">RecommendationsPeriodInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockAction">BlockAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageCode">BlockErrorPageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescription">BlockErrorPageDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessage">BlockErrorPageMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockResponseCode">BlockResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.isResponseInspected">IsResponseInspected</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxArgumentCount">MaxArgumentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgument">MaxNameLengthPerArgument</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiB">MaxResponseSizeInKiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArguments">MaxTotalNameLengthOfArguments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.mediaTypes">MediaTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDays">RecommendationsPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings">WaasWaasPolicyWafConfigProtectionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedHttpMethodsInput`<sup>Optional</sup> <a name="AllowedHttpMethodsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.allowedHttpMethodsInput"></a>

```go
func AllowedHttpMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BlockActionInput`<sup>Optional</sup> <a name="BlockActionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockActionInput"></a>

```go
func BlockActionInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageCodeInput`<sup>Optional</sup> <a name="BlockErrorPageCodeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageCodeInput"></a>

```go
func BlockErrorPageCodeInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescriptionInput`<sup>Optional</sup> <a name="BlockErrorPageDescriptionInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescriptionInput"></a>

```go
func BlockErrorPageDescriptionInput() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessageInput`<sup>Optional</sup> <a name="BlockErrorPageMessageInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessageInput"></a>

```go
func BlockErrorPageMessageInput() *string
```

- *Type:* *string

---

##### `BlockResponseCodeInput`<sup>Optional</sup> <a name="BlockResponseCodeInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockResponseCodeInput"></a>

```go
func BlockResponseCodeInput() *f64
```

- *Type:* *f64

---

##### `IsResponseInspectedInput`<sup>Optional</sup> <a name="IsResponseInspectedInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.isResponseInspectedInput"></a>

```go
func IsResponseInspectedInput() interface{}
```

- *Type:* interface{}

---

##### `MaxArgumentCountInput`<sup>Optional</sup> <a name="MaxArgumentCountInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxArgumentCountInput"></a>

```go
func MaxArgumentCountInput() *f64
```

- *Type:* *f64

---

##### `MaxNameLengthPerArgumentInput`<sup>Optional</sup> <a name="MaxNameLengthPerArgumentInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgumentInput"></a>

```go
func MaxNameLengthPerArgumentInput() *f64
```

- *Type:* *f64

---

##### `MaxResponseSizeInKiBInput`<sup>Optional</sup> <a name="MaxResponseSizeInKiBInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiBInput"></a>

```go
func MaxResponseSizeInKiBInput() *f64
```

- *Type:* *f64

---

##### `MaxTotalNameLengthOfArgumentsInput`<sup>Optional</sup> <a name="MaxTotalNameLengthOfArgumentsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArgumentsInput"></a>

```go
func MaxTotalNameLengthOfArgumentsInput() *f64
```

- *Type:* *f64

---

##### `MediaTypesInput`<sup>Optional</sup> <a name="MediaTypesInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.mediaTypesInput"></a>

```go
func MediaTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RecommendationsPeriodInDaysInput`<sup>Optional</sup> <a name="RecommendationsPeriodInDaysInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDaysInput"></a>

```go
func RecommendationsPeriodInDaysInput() *f64
```

- *Type:* *f64

---

##### `AllowedHttpMethods`<sup>Required</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.allowedHttpMethods"></a>

```go
func AllowedHttpMethods() *[]*string
```

- *Type:* *[]*string

---

##### `BlockAction`<sup>Required</sup> <a name="BlockAction" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockAction"></a>

```go
func BlockAction() *string
```

- *Type:* *string

---

##### `BlockErrorPageCode`<sup>Required</sup> <a name="BlockErrorPageCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageCode"></a>

```go
func BlockErrorPageCode() *string
```

- *Type:* *string

---

##### `BlockErrorPageDescription`<sup>Required</sup> <a name="BlockErrorPageDescription" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescription"></a>

```go
func BlockErrorPageDescription() *string
```

- *Type:* *string

---

##### `BlockErrorPageMessage`<sup>Required</sup> <a name="BlockErrorPageMessage" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessage"></a>

```go
func BlockErrorPageMessage() *string
```

- *Type:* *string

---

##### `BlockResponseCode`<sup>Required</sup> <a name="BlockResponseCode" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockResponseCode"></a>

```go
func BlockResponseCode() *f64
```

- *Type:* *f64

---

##### `IsResponseInspected`<sup>Required</sup> <a name="IsResponseInspected" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.isResponseInspected"></a>

```go
func IsResponseInspected() interface{}
```

- *Type:* interface{}

---

##### `MaxArgumentCount`<sup>Required</sup> <a name="MaxArgumentCount" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxArgumentCount"></a>

```go
func MaxArgumentCount() *f64
```

- *Type:* *f64

---

##### `MaxNameLengthPerArgument`<sup>Required</sup> <a name="MaxNameLengthPerArgument" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgument"></a>

```go
func MaxNameLengthPerArgument() *f64
```

- *Type:* *f64

---

##### `MaxResponseSizeInKiB`<sup>Required</sup> <a name="MaxResponseSizeInKiB" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiB"></a>

```go
func MaxResponseSizeInKiB() *f64
```

- *Type:* *f64

---

##### `MaxTotalNameLengthOfArguments`<sup>Required</sup> <a name="MaxTotalNameLengthOfArguments" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArguments"></a>

```go
func MaxTotalNameLengthOfArguments() *f64
```

- *Type:* *f64

---

##### `MediaTypes`<sup>Required</sup> <a name="MediaTypes" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.mediaTypes"></a>

```go
func MediaTypes() *[]*string
```

- *Type:* *[]*string

---

##### `RecommendationsPeriodInDays`<sup>Required</sup> <a name="RecommendationsPeriodInDays" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDays"></a>

```go
func RecommendationsPeriodInDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() WaasWaasPolicyWafConfigProtectionSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigProtectionSettings">WaasWaasPolicyWafConfigProtectionSettings</a>

---


### WaasWaasPolicyWafConfigWhitelistsList <a name="WaasWaasPolicyWafConfigWhitelistsList" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigWhitelistsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WaasWaasPolicyWafConfigWhitelistsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.get"></a>

```go
func Get(index *f64) WaasWaasPolicyWafConfigWhitelistsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WaasWaasPolicyWafConfigWhitelistsOutputReference <a name="WaasWaasPolicyWafConfigWhitelistsOutputReference" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/waaswaaspolicy"

waaswaaspolicy.NewWaasWaasPolicyWafConfigWhitelistsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WaasWaasPolicyWafConfigWhitelistsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.resetAddresses">ResetAddresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.resetAddressLists">ResetAddressLists</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddresses` <a name="ResetAddresses" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.resetAddresses"></a>

```go
func ResetAddresses()
```

##### `ResetAddressLists` <a name="ResetAddressLists" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.resetAddressLists"></a>

```go
func ResetAddressLists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.addressesInput">AddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.addressListsInput">AddressListsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.addresses">Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.addressLists">AddressLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressesInput`<sup>Optional</sup> <a name="AddressesInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.addressesInput"></a>

```go
func AddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AddressListsInput`<sup>Optional</sup> <a name="AddressListsInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.addressListsInput"></a>

```go
func AddressListsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.addresses"></a>

```go
func Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `AddressLists`<sup>Required</sup> <a name="AddressLists" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.addressLists"></a>

```go
func AddressLists() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waasWaasPolicy.WaasWaasPolicyWafConfigWhitelistsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



