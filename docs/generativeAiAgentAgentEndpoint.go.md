# `generativeAiAgentAgentEndpoint` Submodule <a name="`generativeAiAgentAgentEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenerativeAiAgentAgentEndpoint <a name="GenerativeAiAgentAgentEndpoint" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint oci_generative_ai_agent_agent_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaiagentagentendpoint"

generativeaiagentagentendpoint.NewGenerativeAiAgentAgentEndpoint(scope Construct, id *string, config GenerativeAiAgentAgentEndpointConfig) GenerativeAiAgentAgentEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig">GenerativeAiAgentAgentEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig">GenerativeAiAgentAgentEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putContentModerationConfig">PutContentModerationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putSessionConfig">PutSessionConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetContentModerationConfig">ResetContentModerationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetSessionConfig">ResetSessionConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableCitation">ResetShouldEnableCitation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableSession">ResetShouldEnableSession</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableTrace">ResetShouldEnableTrace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContentModerationConfig` <a name="PutContentModerationConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putContentModerationConfig"></a>

```go
func PutContentModerationConfig(value GenerativeAiAgentAgentEndpointContentModerationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putContentModerationConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a>

---

##### `PutSessionConfig` <a name="PutSessionConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putSessionConfig"></a>

```go
func PutSessionConfig(value GenerativeAiAgentAgentEndpointSessionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putSessionConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value GenerativeAiAgentAgentEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a>

---

##### `ResetContentModerationConfig` <a name="ResetContentModerationConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetContentModerationConfig"></a>

```go
func ResetContentModerationConfig()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetSessionConfig` <a name="ResetSessionConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetSessionConfig"></a>

```go
func ResetSessionConfig()
```

##### `ResetShouldEnableCitation` <a name="ResetShouldEnableCitation" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableCitation"></a>

```go
func ResetShouldEnableCitation()
```

##### `ResetShouldEnableSession` <a name="ResetShouldEnableSession" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableSession"></a>

```go
func ResetShouldEnableSession()
```

##### `ResetShouldEnableTrace` <a name="ResetShouldEnableTrace" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetShouldEnableTrace"></a>

```go
func ResetShouldEnableTrace()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenerativeAiAgentAgentEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaiagentagentendpoint"

generativeaiagentagentendpoint.GenerativeAiAgentAgentEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaiagentagentendpoint"

generativeaiagentagentendpoint.GenerativeAiAgentAgentEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaiagentagentendpoint"

generativeaiagentagentendpoint.GenerativeAiAgentAgentEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaiagentagentendpoint"

generativeaiagentagentendpoint.GenerativeAiAgentAgentEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GenerativeAiAgentAgentEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GenerativeAiAgentAgentEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GenerativeAiAgentAgentEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GenerativeAiAgentAgentEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.contentModerationConfig">ContentModerationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference">GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.sessionConfig">SessionConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference">GenerativeAiAgentAgentEndpointSessionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference">GenerativeAiAgentAgentEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.agentIdInput">AgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.contentModerationConfigInput">ContentModerationConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.sessionConfigInput">SessionConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableCitationInput">ShouldEnableCitationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableSessionInput">ShouldEnableSessionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableTraceInput">ShouldEnableTraceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableCitation">ShouldEnableCitation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableSession">ShouldEnableSession</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableTrace">ShouldEnableTrace</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContentModerationConfig`<sup>Required</sup> <a name="ContentModerationConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.contentModerationConfig"></a>

```go
func ContentModerationConfig() GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference">GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `SessionConfig`<sup>Required</sup> <a name="SessionConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.sessionConfig"></a>

```go
func SessionConfig() GenerativeAiAgentAgentEndpointSessionConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference">GenerativeAiAgentAgentEndpointSessionConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeouts"></a>

```go
func Timeouts() GenerativeAiAgentAgentEndpointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference">GenerativeAiAgentAgentEndpointTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.agentIdInput"></a>

```go
func AgentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ContentModerationConfigInput`<sup>Optional</sup> <a name="ContentModerationConfigInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.contentModerationConfigInput"></a>

```go
func ContentModerationConfigInput() GenerativeAiAgentAgentEndpointContentModerationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SessionConfigInput`<sup>Optional</sup> <a name="SessionConfigInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.sessionConfigInput"></a>

```go
func SessionConfigInput() GenerativeAiAgentAgentEndpointSessionConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a>

---

##### `ShouldEnableCitationInput`<sup>Optional</sup> <a name="ShouldEnableCitationInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableCitationInput"></a>

```go
func ShouldEnableCitationInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldEnableSessionInput`<sup>Optional</sup> <a name="ShouldEnableSessionInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableSessionInput"></a>

```go
func ShouldEnableSessionInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldEnableTraceInput`<sup>Optional</sup> <a name="ShouldEnableTraceInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableTraceInput"></a>

```go
func ShouldEnableTraceInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ShouldEnableCitation`<sup>Required</sup> <a name="ShouldEnableCitation" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableCitation"></a>

```go
func ShouldEnableCitation() interface{}
```

- *Type:* interface{}

---

##### `ShouldEnableSession`<sup>Required</sup> <a name="ShouldEnableSession" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableSession"></a>

```go
func ShouldEnableSession() interface{}
```

- *Type:* interface{}

---

##### `ShouldEnableTrace`<sup>Required</sup> <a name="ShouldEnableTrace" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.shouldEnableTrace"></a>

```go
func ShouldEnableTrace() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GenerativeAiAgentAgentEndpointConfig <a name="GenerativeAiAgentAgentEndpointConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaiagentagentendpoint"

&generativeaiagentagentendpoint.GenerativeAiAgentAgentEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgentId: *string,
	CompartmentId: *string,
	ContentModerationConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	SessionConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig,
	ShouldEnableCitation: interface{},
	ShouldEnableSession: interface{},
	ShouldEnableTrace: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.agentId">AgentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#agent_id GenerativeAiAgentAgentEndpoint#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#compartment_id GenerativeAiAgentAgentEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.contentModerationConfig">ContentModerationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a></code> | content_moderation_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#defined_tags GenerativeAiAgentAgentEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#description GenerativeAiAgentAgentEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#display_name GenerativeAiAgentAgentEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#freeform_tags GenerativeAiAgentAgentEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#id GenerativeAiAgentAgentEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.sessionConfig">SessionConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a></code> | session_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableCitation">ShouldEnableCitation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_citation GenerativeAiAgentAgentEndpoint#should_enable_citation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableSession">ShouldEnableSession</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_session GenerativeAiAgentAgentEndpoint#should_enable_session}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableTrace">ShouldEnableTrace</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_trace GenerativeAiAgentAgentEndpoint#should_enable_trace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.agentId"></a>

```go
AgentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#agent_id GenerativeAiAgentAgentEndpoint#agent_id}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#compartment_id GenerativeAiAgentAgentEndpoint#compartment_id}.

---

##### `ContentModerationConfig`<sup>Optional</sup> <a name="ContentModerationConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.contentModerationConfig"></a>

```go
ContentModerationConfig GenerativeAiAgentAgentEndpointContentModerationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a>

content_moderation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#content_moderation_config GenerativeAiAgentAgentEndpoint#content_moderation_config}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#defined_tags GenerativeAiAgentAgentEndpoint#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#description GenerativeAiAgentAgentEndpoint#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#display_name GenerativeAiAgentAgentEndpoint#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#freeform_tags GenerativeAiAgentAgentEndpoint#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#id GenerativeAiAgentAgentEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SessionConfig`<sup>Optional</sup> <a name="SessionConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.sessionConfig"></a>

```go
SessionConfig GenerativeAiAgentAgentEndpointSessionConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a>

session_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#session_config GenerativeAiAgentAgentEndpoint#session_config}

---

##### `ShouldEnableCitation`<sup>Optional</sup> <a name="ShouldEnableCitation" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableCitation"></a>

```go
ShouldEnableCitation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_citation GenerativeAiAgentAgentEndpoint#should_enable_citation}.

---

##### `ShouldEnableSession`<sup>Optional</sup> <a name="ShouldEnableSession" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableSession"></a>

```go
ShouldEnableSession interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_session GenerativeAiAgentAgentEndpoint#should_enable_session}.

---

##### `ShouldEnableTrace`<sup>Optional</sup> <a name="ShouldEnableTrace" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.shouldEnableTrace"></a>

```go
ShouldEnableTrace interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_trace GenerativeAiAgentAgentEndpoint#should_enable_trace}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointConfig.property.timeouts"></a>

```go
Timeouts GenerativeAiAgentAgentEndpointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts">GenerativeAiAgentAgentEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#timeouts GenerativeAiAgentAgentEndpoint#timeouts}

---

### GenerativeAiAgentAgentEndpointContentModerationConfig <a name="GenerativeAiAgentAgentEndpointContentModerationConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaiagentagentendpoint"

&generativeaiagentagentendpoint.GenerativeAiAgentAgentEndpointContentModerationConfig {
	ShouldEnableOnInput: interface{},
	ShouldEnableOnOutput: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.property.shouldEnableOnInput">ShouldEnableOnInput</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_input GenerativeAiAgentAgentEndpoint#should_enable_on_input}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.property.shouldEnableOnOutput">ShouldEnableOnOutput</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_output GenerativeAiAgentAgentEndpoint#should_enable_on_output}. |

---

##### `ShouldEnableOnInput`<sup>Optional</sup> <a name="ShouldEnableOnInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.property.shouldEnableOnInput"></a>

```go
ShouldEnableOnInput interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_input GenerativeAiAgentAgentEndpoint#should_enable_on_input}.

---

##### `ShouldEnableOnOutput`<sup>Optional</sup> <a name="ShouldEnableOnOutput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig.property.shouldEnableOnOutput"></a>

```go
ShouldEnableOnOutput interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#should_enable_on_output GenerativeAiAgentAgentEndpoint#should_enable_on_output}.

---

### GenerativeAiAgentAgentEndpointSessionConfig <a name="GenerativeAiAgentAgentEndpointSessionConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaiagentagentendpoint"

&generativeaiagentagentendpoint.GenerativeAiAgentAgentEndpointSessionConfig {
	IdleTimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig.property.idleTimeoutInSeconds">IdleTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#idle_timeout_in_seconds GenerativeAiAgentAgentEndpoint#idle_timeout_in_seconds}. |

---

##### `IdleTimeoutInSeconds`<sup>Optional</sup> <a name="IdleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig.property.idleTimeoutInSeconds"></a>

```go
IdleTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#idle_timeout_in_seconds GenerativeAiAgentAgentEndpoint#idle_timeout_in_seconds}.

---

### GenerativeAiAgentAgentEndpointTimeouts <a name="GenerativeAiAgentAgentEndpointTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaiagentagentendpoint"

&generativeaiagentagentendpoint.GenerativeAiAgentAgentEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#create GenerativeAiAgentAgentEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#delete GenerativeAiAgentAgentEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#update GenerativeAiAgentAgentEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#create GenerativeAiAgentAgentEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#delete GenerativeAiAgentAgentEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_agent_endpoint#update GenerativeAiAgentAgentEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference <a name="GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaiagentagentendpoint"

generativeaiagentagentendpoint.NewGenerativeAiAgentAgentEndpointContentModerationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resetShouldEnableOnInput">ResetShouldEnableOnInput</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resetShouldEnableOnOutput">ResetShouldEnableOnOutput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetShouldEnableOnInput` <a name="ResetShouldEnableOnInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resetShouldEnableOnInput"></a>

```go
func ResetShouldEnableOnInput()
```

##### `ResetShouldEnableOnOutput` <a name="ResetShouldEnableOnOutput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.resetShouldEnableOnOutput"></a>

```go
func ResetShouldEnableOnOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInputInput">ShouldEnableOnInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutputInput">ShouldEnableOnOutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInput">ShouldEnableOnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutput">ShouldEnableOnOutput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShouldEnableOnInputInput`<sup>Optional</sup> <a name="ShouldEnableOnInputInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInputInput"></a>

```go
func ShouldEnableOnInputInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldEnableOnOutputInput`<sup>Optional</sup> <a name="ShouldEnableOnOutputInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutputInput"></a>

```go
func ShouldEnableOnOutputInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldEnableOnInput`<sup>Required</sup> <a name="ShouldEnableOnInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnInput"></a>

```go
func ShouldEnableOnInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldEnableOnOutput`<sup>Required</sup> <a name="ShouldEnableOnOutput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.shouldEnableOnOutput"></a>

```go
func ShouldEnableOnOutput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GenerativeAiAgentAgentEndpointContentModerationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointContentModerationConfig">GenerativeAiAgentAgentEndpointContentModerationConfig</a>

---


### GenerativeAiAgentAgentEndpointSessionConfigOutputReference <a name="GenerativeAiAgentAgentEndpointSessionConfigOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaiagentagentendpoint"

generativeaiagentagentendpoint.NewGenerativeAiAgentAgentEndpointSessionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GenerativeAiAgentAgentEndpointSessionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resetIdleTimeoutInSeconds">ResetIdleTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleTimeoutInSeconds` <a name="ResetIdleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.resetIdleTimeoutInSeconds"></a>

```go
func ResetIdleTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSecondsInput">IdleTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSeconds">IdleTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdleTimeoutInSecondsInput`<sup>Optional</sup> <a name="IdleTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSecondsInput"></a>

```go
func IdleTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `IdleTimeoutInSeconds`<sup>Required</sup> <a name="IdleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.idleTimeoutInSeconds"></a>

```go
func IdleTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GenerativeAiAgentAgentEndpointSessionConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointSessionConfig">GenerativeAiAgentAgentEndpointSessionConfig</a>

---


### GenerativeAiAgentAgentEndpointTimeoutsOutputReference <a name="GenerativeAiAgentAgentEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/generativeaiagentagentendpoint"

generativeaiagentagentendpoint.NewGenerativeAiAgentAgentEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GenerativeAiAgentAgentEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.generativeAiAgentAgentEndpoint.GenerativeAiAgentAgentEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



