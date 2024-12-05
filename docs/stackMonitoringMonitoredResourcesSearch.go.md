# `stackMonitoringMonitoredResourcesSearch` Submodule <a name="`stackMonitoringMonitoredResourcesSearch` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourcesSearch <a name="StackMonitoringMonitoredResourcesSearch" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search oci_stack_monitoring_monitored_resources_search}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearch"

stackmonitoringmonitoredresourcessearch.NewStackMonitoringMonitoredResourcesSearch(scope Construct, id *string, config StackMonitoringMonitoredResourcesSearchConfig) StackMonitoringMonitoredResourcesSearch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig">StackMonitoringMonitoredResourcesSearchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig">StackMonitoringMonitoredResourcesSearchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetCompartmentIds">ResetCompartmentIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExcludeFields">ResetExcludeFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostNameContains">ResetHostNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLicense">ResetLicense</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLifecycleStates">ResetLifecycleStates</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetManagementAgentId">ResetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetNameContains">ResetNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetPropertyEquals">ResetPropertyEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceCategory">ResetResourceCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceTimeZone">ResetResourceTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetSourceType">ResetSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedGreaterThanOrEqualTo">ResetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedLessThan">ResetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedGreaterThanOrEqualTo">ResetTimeUpdatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedLessThan">ResetTimeUpdatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.putTimeouts"></a>

```go
func PutTimeouts(value StackMonitoringMonitoredResourcesSearchTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a>

---

##### `ResetCompartmentIds` <a name="ResetCompartmentIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetCompartmentIds"></a>

```go
func ResetCompartmentIds()
```

##### `ResetExcludeFields` <a name="ResetExcludeFields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExcludeFields"></a>

```go
func ResetExcludeFields()
```

##### `ResetExternalId` <a name="ResetExternalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetFields` <a name="ResetFields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetFields"></a>

```go
func ResetFields()
```

##### `ResetHostName` <a name="ResetHostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostName"></a>

```go
func ResetHostName()
```

##### `ResetHostNameContains` <a name="ResetHostNameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostNameContains"></a>

```go
func ResetHostNameContains()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetId"></a>

```go
func ResetId()
```

##### `ResetLicense` <a name="ResetLicense" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLicense"></a>

```go
func ResetLicense()
```

##### `ResetLifecycleStates` <a name="ResetLifecycleStates" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLifecycleStates"></a>

```go
func ResetLifecycleStates()
```

##### `ResetManagementAgentId` <a name="ResetManagementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetManagementAgentId"></a>

```go
func ResetManagementAgentId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetName"></a>

```go
func ResetName()
```

##### `ResetNameContains` <a name="ResetNameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetNameContains"></a>

```go
func ResetNameContains()
```

##### `ResetPropertyEquals` <a name="ResetPropertyEquals" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetPropertyEquals"></a>

```go
func ResetPropertyEquals()
```

##### `ResetResourceCategory` <a name="ResetResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceCategory"></a>

```go
func ResetResourceCategory()
```

##### `ResetResourceTimeZone` <a name="ResetResourceTimeZone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceTimeZone"></a>

```go
func ResetResourceTimeZone()
```

##### `ResetSourceType` <a name="ResetSourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetSourceType"></a>

```go
func ResetSourceType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeCreatedGreaterThanOrEqualTo` <a name="ResetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedGreaterThanOrEqualTo"></a>

```go
func ResetTimeCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeCreatedLessThan` <a name="ResetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedLessThan"></a>

```go
func ResetTimeCreatedLessThan()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeUpdatedGreaterThanOrEqualTo` <a name="ResetTimeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedGreaterThanOrEqualTo"></a>

```go
func ResetTimeUpdatedGreaterThanOrEqualTo()
```

##### `ResetTimeUpdatedLessThan` <a name="ResetTimeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedLessThan"></a>

```go
func ResetTimeUpdatedLessThan()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourcesSearch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearch"

stackmonitoringmonitoredresourcessearch.StackMonitoringMonitoredResourcesSearch_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearch"

stackmonitoringmonitoredresourcessearch.StackMonitoringMonitoredResourcesSearch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearch"

stackmonitoringmonitoredresourcessearch.StackMonitoringMonitoredResourcesSearch_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearch"

stackmonitoringmonitoredresourcessearch.StackMonitoringMonitoredResourcesSearch_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourcesSearch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StackMonitoringMonitoredResourcesSearch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StackMonitoringMonitoredResourcesSearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourcesSearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList">StackMonitoringMonitoredResourcesSearchItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference">StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdsInput">CompartmentIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFieldsInput">ExcludeFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fieldsInput">FieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContainsInput">HostNameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.licenseInput">LicenseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStatesInput">LifecycleStatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentIdInput">ManagementAgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContainsInput">NameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEqualsInput">PropertyEqualsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategoryInput">ResourceCategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZoneInput">ResourceTimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualToInput">TimeCreatedGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThanInput">TimeCreatedLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualToInput">TimeUpdatedGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThanInput">TimeUpdatedLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIds">CompartmentIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFields">ExcludeFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fields">Fields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContains">HostNameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.license">License</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStates">LifecycleStates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContains">NameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEquals">PropertyEquals</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategory">ResourceCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZone">ResourceTimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualTo">TimeUpdatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThan">TimeUpdatedLessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.items"></a>

```go
func Items() StackMonitoringMonitoredResourcesSearchItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList">StackMonitoringMonitoredResourcesSearchItemsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeouts"></a>

```go
func Timeouts() StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference">StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdsInput`<sup>Optional</sup> <a name="CompartmentIdsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdsInput"></a>

```go
func CompartmentIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeFieldsInput`<sup>Optional</sup> <a name="ExcludeFieldsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFieldsInput"></a>

```go
func ExcludeFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fieldsInput"></a>

```go
func FieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HostNameContainsInput`<sup>Optional</sup> <a name="HostNameContainsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContainsInput"></a>

```go
func HostNameContainsInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseInput`<sup>Optional</sup> <a name="LicenseInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.licenseInput"></a>

```go
func LicenseInput() *string
```

- *Type:* *string

---

##### `LifecycleStatesInput`<sup>Optional</sup> <a name="LifecycleStatesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStatesInput"></a>

```go
func LifecycleStatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ManagementAgentIdInput`<sup>Optional</sup> <a name="ManagementAgentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentIdInput"></a>

```go
func ManagementAgentIdInput() *string
```

- *Type:* *string

---

##### `NameContainsInput`<sup>Optional</sup> <a name="NameContainsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContainsInput"></a>

```go
func NameContainsInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PropertyEqualsInput`<sup>Optional</sup> <a name="PropertyEqualsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEqualsInput"></a>

```go
func PropertyEqualsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceCategoryInput`<sup>Optional</sup> <a name="ResourceCategoryInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategoryInput"></a>

```go
func ResourceCategoryInput() *string
```

- *Type:* *string

---

##### `ResourceTimeZoneInput`<sup>Optional</sup> <a name="ResourceTimeZoneInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZoneInput"></a>

```go
func ResourceTimeZoneInput() *string
```

- *Type:* *string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualToInput"></a>

```go
func TimeCreatedGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeCreatedLessThanInput`<sup>Optional</sup> <a name="TimeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThanInput"></a>

```go
func TimeCreatedLessThanInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeUpdatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeUpdatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualToInput"></a>

```go
func TimeUpdatedGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeUpdatedLessThanInput`<sup>Optional</sup> <a name="TimeUpdatedLessThanInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThanInput"></a>

```go
func TimeUpdatedLessThanInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIds`<sup>Required</sup> <a name="CompartmentIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIds"></a>

```go
func CompartmentIds() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeFields`<sup>Required</sup> <a name="ExcludeFields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFields"></a>

```go
func ExcludeFields() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fields"></a>

```go
func Fields() *[]*string
```

- *Type:* *[]*string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `HostNameContains`<sup>Required</sup> <a name="HostNameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContains"></a>

```go
func HostNameContains() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `License`<sup>Required</sup> <a name="License" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.license"></a>

```go
func License() *string
```

- *Type:* *string

---

##### `LifecycleStates`<sup>Required</sup> <a name="LifecycleStates" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStates"></a>

```go
func LifecycleStates() *[]*string
```

- *Type:* *[]*string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentId"></a>

```go
func ManagementAgentId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameContains`<sup>Required</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContains"></a>

```go
func NameContains() *string
```

- *Type:* *string

---

##### `PropertyEquals`<sup>Required</sup> <a name="PropertyEquals" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEquals"></a>

```go
func PropertyEquals() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceCategory`<sup>Required</sup> <a name="ResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategory"></a>

```go
func ResourceCategory() *string
```

- *Type:* *string

---

##### `ResourceTimeZone`<sup>Required</sup> <a name="ResourceTimeZone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZone"></a>

```go
func ResourceTimeZone() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualTo"></a>

```go
func TimeCreatedGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeCreatedLessThan`<sup>Required</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThan"></a>

```go
func TimeCreatedLessThan() *string
```

- *Type:* *string

---

##### `TimeUpdatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualTo"></a>

```go
func TimeUpdatedGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeUpdatedLessThan`<sup>Required</sup> <a name="TimeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThan"></a>

```go
func TimeUpdatedLessThan() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourcesSearchConfig <a name="StackMonitoringMonitoredResourcesSearchConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearch"

&stackmonitoringmonitoredresourcessearch.StackMonitoringMonitoredResourcesSearchConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CompartmentIds: *[]*string,
	ExcludeFields: *[]*string,
	ExternalId: *string,
	Fields: *[]*string,
	HostName: *string,
	HostNameContains: *string,
	Id: *string,
	License: *string,
	LifecycleStates: *[]*string,
	ManagementAgentId: *string,
	Name: *string,
	NameContains: *string,
	PropertyEquals: *map[string]*string,
	ResourceCategory: *string,
	ResourceTimeZone: *string,
	SourceType: *string,
	State: *string,
	TimeCreatedGreaterThanOrEqualTo: *string,
	TimeCreatedLessThan: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts,
	TimeUpdatedGreaterThanOrEqualTo: *string,
	TimeUpdatedLessThan: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_id StackMonitoringMonitoredResourcesSearch#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentIds">CompartmentIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_ids StackMonitoringMonitoredResourcesSearch#compartment_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.excludeFields">ExcludeFields</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#exclude_fields StackMonitoringMonitoredResourcesSearch#exclude_fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#external_id StackMonitoringMonitoredResourcesSearch#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.fields">Fields</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#fields StackMonitoringMonitoredResourcesSearch#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name StackMonitoringMonitoredResourcesSearch#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostNameContains">HostNameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name_contains StackMonitoringMonitoredResourcesSearch#host_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#id StackMonitoringMonitoredResourcesSearch#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.license">License</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#license StackMonitoringMonitoredResourcesSearch#license}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycleStates">LifecycleStates</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#lifecycle_states StackMonitoringMonitoredResourcesSearch#lifecycle_states}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#management_agent_id StackMonitoringMonitoredResourcesSearch#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name StackMonitoringMonitoredResourcesSearch#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.nameContains">NameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name_contains StackMonitoringMonitoredResourcesSearch#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.propertyEquals">PropertyEquals</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#property_equals StackMonitoringMonitoredResourcesSearch#property_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceCategory">ResourceCategory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_category StackMonitoringMonitoredResourcesSearch#resource_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceTimeZone">ResourceTimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_time_zone StackMonitoringMonitoredResourcesSearch#resource_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#source_type StackMonitoringMonitoredResourcesSearch#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#state StackMonitoringMonitoredResourcesSearch#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_less_than StackMonitoringMonitoredResourcesSearch#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedGreaterThanOrEqualTo">TimeUpdatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedLessThan">TimeUpdatedLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_less_than StackMonitoringMonitoredResourcesSearch#time_updated_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#type StackMonitoringMonitoredResourcesSearch#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_id StackMonitoringMonitoredResourcesSearch#compartment_id}.

---

##### `CompartmentIds`<sup>Optional</sup> <a name="CompartmentIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentIds"></a>

```go
CompartmentIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_ids StackMonitoringMonitoredResourcesSearch#compartment_ids}.

---

##### `ExcludeFields`<sup>Optional</sup> <a name="ExcludeFields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.excludeFields"></a>

```go
ExcludeFields *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#exclude_fields StackMonitoringMonitoredResourcesSearch#exclude_fields}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#external_id StackMonitoringMonitoredResourcesSearch#external_id}.

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.fields"></a>

```go
Fields *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#fields StackMonitoringMonitoredResourcesSearch#fields}.

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name StackMonitoringMonitoredResourcesSearch#host_name}.

---

##### `HostNameContains`<sup>Optional</sup> <a name="HostNameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostNameContains"></a>

```go
HostNameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name_contains StackMonitoringMonitoredResourcesSearch#host_name_contains}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#id StackMonitoringMonitoredResourcesSearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `License`<sup>Optional</sup> <a name="License" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.license"></a>

```go
License *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#license StackMonitoringMonitoredResourcesSearch#license}.

---

##### `LifecycleStates`<sup>Optional</sup> <a name="LifecycleStates" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycleStates"></a>

```go
LifecycleStates *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#lifecycle_states StackMonitoringMonitoredResourcesSearch#lifecycle_states}.

---

##### `ManagementAgentId`<sup>Optional</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.managementAgentId"></a>

```go
ManagementAgentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#management_agent_id StackMonitoringMonitoredResourcesSearch#management_agent_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name StackMonitoringMonitoredResourcesSearch#name}.

---

##### `NameContains`<sup>Optional</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.nameContains"></a>

```go
NameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name_contains StackMonitoringMonitoredResourcesSearch#name_contains}.

---

##### `PropertyEquals`<sup>Optional</sup> <a name="PropertyEquals" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.propertyEquals"></a>

```go
PropertyEquals *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#property_equals StackMonitoringMonitoredResourcesSearch#property_equals}.

---

##### `ResourceCategory`<sup>Optional</sup> <a name="ResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceCategory"></a>

```go
ResourceCategory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_category StackMonitoringMonitoredResourcesSearch#resource_category}.

---

##### `ResourceTimeZone`<sup>Optional</sup> <a name="ResourceTimeZone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceTimeZone"></a>

```go
ResourceTimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_time_zone StackMonitoringMonitoredResourcesSearch#resource_time_zone}.

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#source_type StackMonitoringMonitoredResourcesSearch#source_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#state StackMonitoringMonitoredResourcesSearch#state}.

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```go
TimeCreatedGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_created_greater_than_or_equal_to}.

---

##### `TimeCreatedLessThan`<sup>Optional</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedLessThan"></a>

```go
TimeCreatedLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_less_than StackMonitoringMonitoredResourcesSearch#time_created_less_than}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeouts"></a>

```go
Timeouts StackMonitoringMonitoredResourcesSearchTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#timeouts StackMonitoringMonitoredResourcesSearch#timeouts}

---

##### `TimeUpdatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedGreaterThanOrEqualTo"></a>

```go
TimeUpdatedGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_updated_greater_than_or_equal_to}.

---

##### `TimeUpdatedLessThan`<sup>Optional</sup> <a name="TimeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedLessThan"></a>

```go
TimeUpdatedLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_less_than StackMonitoringMonitoredResourcesSearch#time_updated_less_than}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#type StackMonitoringMonitoredResourcesSearch#type}.

---

### StackMonitoringMonitoredResourcesSearchItems <a name="StackMonitoringMonitoredResourcesSearchItems" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearch"

&stackmonitoringmonitoredresourcessearch.StackMonitoringMonitoredResourcesSearchItems {

}
```


### StackMonitoringMonitoredResourcesSearchItemsProperties <a name="StackMonitoringMonitoredResourcesSearchItemsProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearch"

&stackmonitoringmonitoredresourcessearch.StackMonitoringMonitoredResourcesSearchItemsProperties {

}
```


### StackMonitoringMonitoredResourcesSearchTimeouts <a name="StackMonitoringMonitoredResourcesSearchTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearch"

&stackmonitoringmonitoredresourcessearch.StackMonitoringMonitoredResourcesSearchTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#create StackMonitoringMonitoredResourcesSearch#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#delete StackMonitoringMonitoredResourcesSearch#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#update StackMonitoringMonitoredResourcesSearch#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#create StackMonitoringMonitoredResourcesSearch#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#delete StackMonitoringMonitoredResourcesSearch#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#update StackMonitoringMonitoredResourcesSearch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourcesSearchItemsList <a name="StackMonitoringMonitoredResourcesSearchItemsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearch"

stackmonitoringmonitoredresourcessearch.NewStackMonitoringMonitoredResourcesSearchItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StackMonitoringMonitoredResourcesSearchItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.get"></a>

```go
func Get(index *f64) StackMonitoringMonitoredResourcesSearchItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StackMonitoringMonitoredResourcesSearchItemsOutputReference <a name="StackMonitoringMonitoredResourcesSearchItemsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearch"

stackmonitoringmonitoredresourcessearch.NewStackMonitoringMonitoredResourcesSearchItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StackMonitoringMonitoredResourcesSearchItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.license">License</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList">StackMonitoringMonitoredResourcesSearchItemsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.resourceCategory">ResourceCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems">StackMonitoringMonitoredResourcesSearchItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `License`<sup>Required</sup> <a name="License" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.license"></a>

```go
func License() *string
```

- *Type:* *string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.managementAgentId"></a>

```go
func ManagementAgentId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.properties"></a>

```go
func Properties() StackMonitoringMonitoredResourcesSearchItemsPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList">StackMonitoringMonitoredResourcesSearchItemsPropertiesList</a>

---

##### `ResourceCategory`<sup>Required</sup> <a name="ResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.resourceCategory"></a>

```go
func ResourceCategory() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() StackMonitoringMonitoredResourcesSearchItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems">StackMonitoringMonitoredResourcesSearchItems</a>

---


### StackMonitoringMonitoredResourcesSearchItemsPropertiesList <a name="StackMonitoringMonitoredResourcesSearchItemsPropertiesList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearch"

stackmonitoringmonitoredresourcessearch.NewStackMonitoringMonitoredResourcesSearchItemsPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StackMonitoringMonitoredResourcesSearchItemsPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.get"></a>

```go
func Get(index *f64) StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference <a name="StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearch"

stackmonitoringmonitoredresourcessearch.NewStackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties">StackMonitoringMonitoredResourcesSearchItemsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() StackMonitoringMonitoredResourcesSearchItemsProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties">StackMonitoringMonitoredResourcesSearchItemsProperties</a>

---


### StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference <a name="StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearch"

stackmonitoringmonitoredresourcessearch.NewStackMonitoringMonitoredResourcesSearchTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



