# `apmConfigConfig` Submodule <a name="`apmConfigConfig` Submodule" id="rhizo-co-terraform-provider-oci.apmConfigConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmConfigConfig <a name="ApmConfigConfig" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config oci_apm_config_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

apmconfigconfig.NewApmConfigConfig(scope Construct, id *string, config ApmConfigConfigConfig) ApmConfigConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig">ApmConfigConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig">ApmConfigConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putInUseBy">PutInUseBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putMetrics">PutMetrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFilterId">ResetFilterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFilterText">ResetFilterText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetInUseBy">ResetInUseBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetMetrics">ResetMetrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOpcDryRun">ResetOpcDryRun</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDimensions` <a name="PutDimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putDimensions"></a>

```go
func PutDimensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putDimensions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInUseBy` <a name="PutInUseBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putInUseBy"></a>

```go
func PutInUseBy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putInUseBy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetrics` <a name="PutMetrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putMetrics"></a>

```go
func PutMetrics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putMetrics.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putTimeouts"></a>

```go
func PutTimeouts(value ApmConfigConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDimensions` <a name="ResetDimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetFilterId` <a name="ResetFilterId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFilterId"></a>

```go
func ResetFilterId()
```

##### `ResetFilterText` <a name="ResetFilterText" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFilterText"></a>

```go
func ResetFilterText()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetGroup` <a name="ResetGroup" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetInUseBy` <a name="ResetInUseBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetInUseBy"></a>

```go
func ResetInUseBy()
```

##### `ResetMetrics` <a name="ResetMetrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetMetrics"></a>

```go
func ResetMetrics()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOpcDryRun` <a name="ResetOpcDryRun" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOpcDryRun"></a>

```go
func ResetOpcDryRun()
```

##### `ResetOptions` <a name="ResetOptions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetRules"></a>

```go
func ResetRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApmConfigConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

apmconfigconfig.ApmConfigConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

apmconfigconfig.ApmConfigConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

apmconfigconfig.ApmConfigConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

apmconfigconfig.ApmConfigConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApmConfigConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApmConfigConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApmConfigConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApmConfigConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList">ApmConfigConfigDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.inUseBy">InUseBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList">ApmConfigConfigInUseByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.metrics">Metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList">ApmConfigConfigMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList">ApmConfigConfigRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference">ApmConfigConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.configTypeInput">ConfigTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dimensionsInput">DimensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterIdInput">FilterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterTextInput">FilterTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.inUseByInput">InUseByInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.metricsInput">MetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.opcDryRunInput">OpcDryRunInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.optionsInput">OptionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.configType">ConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterId">FilterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterText">FilterText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.opcDryRun">OpcDryRun</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.options">Options</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dimensions"></a>

```go
func Dimensions() ApmConfigConfigDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList">ApmConfigConfigDimensionsList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `InUseBy`<sup>Required</sup> <a name="InUseBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.inUseBy"></a>

```go
func InUseBy() ApmConfigConfigInUseByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList">ApmConfigConfigInUseByList</a>

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.metrics"></a>

```go
func Metrics() ApmConfigConfigMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList">ApmConfigConfigMetricsList</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.rules"></a>

```go
func Rules() ApmConfigConfigRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList">ApmConfigConfigRulesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeouts"></a>

```go
func Timeouts() ApmConfigConfigTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference">ApmConfigConfigTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.apmDomainIdInput"></a>

```go
func ApmDomainIdInput() *string
```

- *Type:* *string

---

##### `ConfigTypeInput`<sup>Optional</sup> <a name="ConfigTypeInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.configTypeInput"></a>

```go
func ConfigTypeInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.dimensionsInput"></a>

```go
func DimensionsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterIdInput`<sup>Optional</sup> <a name="FilterIdInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterIdInput"></a>

```go
func FilterIdInput() *string
```

- *Type:* *string

---

##### `FilterTextInput`<sup>Optional</sup> <a name="FilterTextInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterTextInput"></a>

```go
func FilterTextInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InUseByInput`<sup>Optional</sup> <a name="InUseByInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.inUseByInput"></a>

```go
func InUseByInput() interface{}
```

- *Type:* interface{}

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.metricsInput"></a>

```go
func MetricsInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OpcDryRunInput`<sup>Optional</sup> <a name="OpcDryRunInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.opcDryRunInput"></a>

```go
func OpcDryRunInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.optionsInput"></a>

```go
func OptionsInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.apmDomainId"></a>

```go
func ApmDomainId() *string
```

- *Type:* *string

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.configType"></a>

```go
func ConfigType() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FilterId`<sup>Required</sup> <a name="FilterId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterId"></a>

```go
func FilterId() *string
```

- *Type:* *string

---

##### `FilterText`<sup>Required</sup> <a name="FilterText" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.filterText"></a>

```go
func FilterText() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Group`<sup>Required</sup> <a name="Group" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OpcDryRun`<sup>Required</sup> <a name="OpcDryRun" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.opcDryRun"></a>

```go
func OpcDryRun() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.options"></a>

```go
func Options() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApmConfigConfigConfig <a name="ApmConfigConfigConfig" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

&apmconfigconfig.ApmConfigConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApmDomainId: *string,
	ConfigType: *string,
	DisplayName: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	Dimensions: interface{},
	FilterId: *string,
	FilterText: *string,
	FreeformTags: *map[string]*string,
	Group: *string,
	Id: *string,
	InUseBy: interface{},
	Metrics: interface{},
	Namespace: *string,
	OpcDryRun: *string,
	Options: *string,
	Rules: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.apmConfigConfig.ApmConfigConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#apm_domain_id ApmConfigConfig#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.configType">ConfigType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#config_type ApmConfigConfig#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#defined_tags ApmConfigConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.dimensions">Dimensions</a></code> | <code>interface{}</code> | dimensions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.filterId">FilterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_id ApmConfigConfig#filter_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.filterText">FilterText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#freeform_tags ApmConfigConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.group">Group</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#group ApmConfigConfig#group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#id ApmConfigConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.inUseBy">InUseBy</a></code> | <code>interface{}</code> | in_use_by block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.metrics">Metrics</a></code> | <code>interface{}</code> | metrics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#namespace ApmConfigConfig#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.opcDryRun">OpcDryRun</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#opc_dry_run ApmConfigConfig#opc_dry_run}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.options">Options</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#options ApmConfigConfig#options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.apmDomainId"></a>

```go
ApmDomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#apm_domain_id ApmConfigConfig#apm_domain_id}.

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.configType"></a>

```go
ConfigType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#config_type ApmConfigConfig#config_type}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#defined_tags ApmConfigConfig#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.dimensions"></a>

```go
Dimensions interface{}
```

- *Type:* interface{}

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#dimensions ApmConfigConfig#dimensions}

---

##### `FilterId`<sup>Optional</sup> <a name="FilterId" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.filterId"></a>

```go
FilterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_id ApmConfigConfig#filter_id}.

---

##### `FilterText`<sup>Optional</sup> <a name="FilterText" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.filterText"></a>

```go
FilterText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#freeform_tags ApmConfigConfig#freeform_tags}.

---

##### `Group`<sup>Optional</sup> <a name="Group" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.group"></a>

```go
Group *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#group ApmConfigConfig#group}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#id ApmConfigConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InUseBy`<sup>Optional</sup> <a name="InUseBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.inUseBy"></a>

```go
InUseBy interface{}
```

- *Type:* interface{}

in_use_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#in_use_by ApmConfigConfig#in_use_by}

---

##### `Metrics`<sup>Optional</sup> <a name="Metrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.metrics"></a>

```go
Metrics interface{}
```

- *Type:* interface{}

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#metrics ApmConfigConfig#metrics}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#namespace ApmConfigConfig#namespace}.

---

##### `OpcDryRun`<sup>Optional</sup> <a name="OpcDryRun" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.opcDryRun"></a>

```go
OpcDryRun *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#opc_dry_run ApmConfigConfig#opc_dry_run}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.options"></a>

```go
Options *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#options ApmConfigConfig#options}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#rules ApmConfigConfig#rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigConfig.property.timeouts"></a>

```go
Timeouts ApmConfigConfigTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts">ApmConfigConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#timeouts ApmConfigConfig#timeouts}

---

### ApmConfigConfigDimensions <a name="ApmConfigConfigDimensions" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

&apmconfigconfig.ApmConfigConfigDimensions {
	Name: *string,
	ValueSource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#name ApmConfigConfig#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.property.valueSource">ValueSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#value_source ApmConfigConfig#value_source}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#name ApmConfigConfig#name}.

---

##### `ValueSource`<sup>Optional</sup> <a name="ValueSource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensions.property.valueSource"></a>

```go
ValueSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#value_source ApmConfigConfig#value_source}.

---

### ApmConfigConfigInUseBy <a name="ApmConfigConfigInUseBy" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

&apmconfigconfig.ApmConfigConfigInUseBy {

}
```


### ApmConfigConfigMetrics <a name="ApmConfigConfigMetrics" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

&apmconfigconfig.ApmConfigConfigMetrics {
	Description: *string,
	Name: *string,
	Unit: *string,
	ValueSource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#name ApmConfigConfig#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.unit">Unit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#unit ApmConfigConfig#unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.valueSource">ValueSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#value_source ApmConfigConfig#value_source}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#description ApmConfigConfig#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#name ApmConfigConfig#name}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#unit ApmConfigConfig#unit}.

---

##### `ValueSource`<sup>Optional</sup> <a name="ValueSource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetrics.property.valueSource"></a>

```go
ValueSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#value_source ApmConfigConfig#value_source}.

---

### ApmConfigConfigRules <a name="ApmConfigConfigRules" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

&apmconfigconfig.ApmConfigConfigRules {
	DisplayName: *string,
	FilterText: *string,
	IsApplyToErrorSpans: interface{},
	IsEnabled: interface{},
	Priority: *f64,
	SatisfiedResponseTime: *f64,
	ToleratingResponseTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.filterText">FilterText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.isApplyToErrorSpans">IsApplyToErrorSpans</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#is_apply_to_error_spans ApmConfigConfig#is_apply_to_error_spans}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#is_enabled ApmConfigConfig#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#priority ApmConfigConfig#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.satisfiedResponseTime">SatisfiedResponseTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#satisfied_response_time ApmConfigConfig#satisfied_response_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.toleratingResponseTime">ToleratingResponseTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#tolerating_response_time ApmConfigConfig#tolerating_response_time}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}.

---

##### `FilterText`<sup>Optional</sup> <a name="FilterText" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.filterText"></a>

```go
FilterText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}.

---

##### `IsApplyToErrorSpans`<sup>Optional</sup> <a name="IsApplyToErrorSpans" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.isApplyToErrorSpans"></a>

```go
IsApplyToErrorSpans interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#is_apply_to_error_spans ApmConfigConfig#is_apply_to_error_spans}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#is_enabled ApmConfigConfig#is_enabled}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#priority ApmConfigConfig#priority}.

---

##### `SatisfiedResponseTime`<sup>Optional</sup> <a name="SatisfiedResponseTime" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.satisfiedResponseTime"></a>

```go
SatisfiedResponseTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#satisfied_response_time ApmConfigConfig#satisfied_response_time}.

---

##### `ToleratingResponseTime`<sup>Optional</sup> <a name="ToleratingResponseTime" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRules.property.toleratingResponseTime"></a>

```go
ToleratingResponseTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#tolerating_response_time ApmConfigConfig#tolerating_response_time}.

---

### ApmConfigConfigTimeouts <a name="ApmConfigConfigTimeouts" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

&apmconfigconfig.ApmConfigConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#create ApmConfigConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#delete ApmConfigConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#update ApmConfigConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#create ApmConfigConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#delete ApmConfigConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_config_config#update ApmConfigConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApmConfigConfigDimensionsList <a name="ApmConfigConfigDimensionsList" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

apmconfigconfig.NewApmConfigConfigDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApmConfigConfigDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.get"></a>

```go
func Get(index *f64) ApmConfigConfigDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApmConfigConfigDimensionsOutputReference <a name="ApmConfigConfigDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

apmconfigconfig.NewApmConfigConfigDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApmConfigConfigDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resetValueSource">ResetValueSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValueSource` <a name="ResetValueSource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.resetValueSource"></a>

```go
func ResetValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.valueSourceInput">ValueSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.valueSource">ValueSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueSourceInput`<sup>Optional</sup> <a name="ValueSourceInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.valueSourceInput"></a>

```go
func ValueSourceInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ValueSource`<sup>Required</sup> <a name="ValueSource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.valueSource"></a>

```go
func ValueSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApmConfigConfigInUseByList <a name="ApmConfigConfigInUseByList" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

apmconfigconfig.NewApmConfigConfigInUseByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApmConfigConfigInUseByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.get"></a>

```go
func Get(index *f64) ApmConfigConfigInUseByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApmConfigConfigInUseByOutputReference <a name="ApmConfigConfigInUseByOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

apmconfigconfig.NewApmConfigConfigInUseByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApmConfigConfigInUseByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.configType">ConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.optionsGroup">OptionsGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.configType"></a>

```go
func ConfigType() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OptionsGroup`<sup>Required</sup> <a name="OptionsGroup" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.optionsGroup"></a>

```go
func OptionsGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigInUseByOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApmConfigConfigMetricsList <a name="ApmConfigConfigMetricsList" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

apmconfigconfig.NewApmConfigConfigMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApmConfigConfigMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.get"></a>

```go
func Get(index *f64) ApmConfigConfigMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApmConfigConfigMetricsOutputReference <a name="ApmConfigConfigMetricsOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

apmconfigconfig.NewApmConfigConfigMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApmConfigConfigMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetValueSource">ResetValueSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetUnit` <a name="ResetUnit" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetUnit"></a>

```go
func ResetUnit()
```

##### `ResetValueSource` <a name="ResetValueSource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.resetValueSource"></a>

```go
func ResetValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.valueSourceInput">ValueSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.valueSource">ValueSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `ValueSourceInput`<sup>Optional</sup> <a name="ValueSourceInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.valueSourceInput"></a>

```go
func ValueSourceInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `ValueSource`<sup>Required</sup> <a name="ValueSource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.valueSource"></a>

```go
func ValueSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApmConfigConfigRulesList <a name="ApmConfigConfigRulesList" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

apmconfigconfig.NewApmConfigConfigRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApmConfigConfigRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.get"></a>

```go
func Get(index *f64) ApmConfigConfigRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApmConfigConfigRulesOutputReference <a name="ApmConfigConfigRulesOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

apmconfigconfig.NewApmConfigConfigRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApmConfigConfigRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetFilterText">ResetFilterText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetIsApplyToErrorSpans">ResetIsApplyToErrorSpans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetSatisfiedResponseTime">ResetSatisfiedResponseTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetToleratingResponseTime">ResetToleratingResponseTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilterText` <a name="ResetFilterText" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetFilterText"></a>

```go
func ResetFilterText()
```

##### `ResetIsApplyToErrorSpans` <a name="ResetIsApplyToErrorSpans" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetIsApplyToErrorSpans"></a>

```go
func ResetIsApplyToErrorSpans()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetPriority` <a name="ResetPriority" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetSatisfiedResponseTime` <a name="ResetSatisfiedResponseTime" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetSatisfiedResponseTime"></a>

```go
func ResetSatisfiedResponseTime()
```

##### `ResetToleratingResponseTime` <a name="ResetToleratingResponseTime" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.resetToleratingResponseTime"></a>

```go
func ResetToleratingResponseTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.filterTextInput">FilterTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isApplyToErrorSpansInput">IsApplyToErrorSpansInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.satisfiedResponseTimeInput">SatisfiedResponseTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.toleratingResponseTimeInput">ToleratingResponseTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.filterText">FilterText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isApplyToErrorSpans">IsApplyToErrorSpans</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.satisfiedResponseTime">SatisfiedResponseTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.toleratingResponseTime">ToleratingResponseTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterTextInput`<sup>Optional</sup> <a name="FilterTextInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.filterTextInput"></a>

```go
func FilterTextInput() *string
```

- *Type:* *string

---

##### `IsApplyToErrorSpansInput`<sup>Optional</sup> <a name="IsApplyToErrorSpansInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isApplyToErrorSpansInput"></a>

```go
func IsApplyToErrorSpansInput() interface{}
```

- *Type:* interface{}

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `SatisfiedResponseTimeInput`<sup>Optional</sup> <a name="SatisfiedResponseTimeInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.satisfiedResponseTimeInput"></a>

```go
func SatisfiedResponseTimeInput() *f64
```

- *Type:* *f64

---

##### `ToleratingResponseTimeInput`<sup>Optional</sup> <a name="ToleratingResponseTimeInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.toleratingResponseTimeInput"></a>

```go
func ToleratingResponseTimeInput() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FilterText`<sup>Required</sup> <a name="FilterText" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.filterText"></a>

```go
func FilterText() *string
```

- *Type:* *string

---

##### `IsApplyToErrorSpans`<sup>Required</sup> <a name="IsApplyToErrorSpans" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isApplyToErrorSpans"></a>

```go
func IsApplyToErrorSpans() interface{}
```

- *Type:* interface{}

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `SatisfiedResponseTime`<sup>Required</sup> <a name="SatisfiedResponseTime" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.satisfiedResponseTime"></a>

```go
func SatisfiedResponseTime() *f64
```

- *Type:* *f64

---

##### `ToleratingResponseTime`<sup>Required</sup> <a name="ToleratingResponseTime" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.toleratingResponseTime"></a>

```go
func ToleratingResponseTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApmConfigConfigTimeoutsOutputReference <a name="ApmConfigConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmconfigconfig"

apmconfigconfig.NewApmConfigConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApmConfigConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmConfigConfig.ApmConfigConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



