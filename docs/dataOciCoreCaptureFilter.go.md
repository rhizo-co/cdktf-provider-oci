# `dataOciCoreCaptureFilter` Submodule <a name="`dataOciCoreCaptureFilter` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreCaptureFilter <a name="DataOciCoreCaptureFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filter oci_core_capture_filter}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilter(scope Construct, id *string, config DataOciCoreCaptureFilterConfig) DataOciCoreCaptureFilter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig">DataOciCoreCaptureFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig">DataOciCoreCaptureFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreCaptureFilter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.DataOciCoreCaptureFilter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.DataOciCoreCaptureFilter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.DataOciCoreCaptureFilter_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.DataOciCoreCaptureFilter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreCaptureFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreCaptureFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreCaptureFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreCaptureFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.filterType">FilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.flowLogCaptureFilterRules">FlowLogCaptureFilterRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.vtapCaptureFilterRules">VtapCaptureFilterRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList">DataOciCoreCaptureFilterVtapCaptureFilterRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.captureFilterIdInput">CaptureFilterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.captureFilterId">CaptureFilterId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.filterType"></a>

```go
func FilterType() *string
```

- *Type:* *string

---

##### `FlowLogCaptureFilterRules`<sup>Required</sup> <a name="FlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.flowLogCaptureFilterRules"></a>

```go
func FlowLogCaptureFilterRules() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `VtapCaptureFilterRules`<sup>Required</sup> <a name="VtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.vtapCaptureFilterRules"></a>

```go
func VtapCaptureFilterRules() DataOciCoreCaptureFilterVtapCaptureFilterRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList">DataOciCoreCaptureFilterVtapCaptureFilterRulesList</a>

---

##### `CaptureFilterIdInput`<sup>Optional</sup> <a name="CaptureFilterIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.captureFilterIdInput"></a>

```go
func CaptureFilterIdInput() *string
```

- *Type:* *string

---

##### `CaptureFilterId`<sup>Required</sup> <a name="CaptureFilterId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.captureFilterId"></a>

```go
func CaptureFilterId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreCaptureFilterConfig <a name="DataOciCoreCaptureFilterConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CaptureFilterId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.captureFilterId">CaptureFilterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filter#capture_filter_id DataOciCoreCaptureFilter#capture_filter_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaptureFilterId`<sup>Required</sup> <a name="CaptureFilterId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterConfig.property.captureFilterId"></a>

```go
CaptureFilterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filter#capture_filter_id DataOciCoreCaptureFilter#capture_filter_id}.

---

### DataOciCoreCaptureFilterFlowLogCaptureFilterRules <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRules {

}
```


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions {

}
```


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions {

}
```


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange {

}
```


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange {

}
```


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions {

}
```


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange {

}
```


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange {

}
```


### DataOciCoreCaptureFilterVtapCaptureFilterRules <a name="DataOciCoreCaptureFilterVtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterVtapCaptureFilterRules {

}
```


### DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions {

}
```


### DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions {

}
```


### DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange {

}
```


### DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange {

}
```


### DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions {

}
```


### DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange {

}
```


### DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

&dataocicorecapturefilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.type">Type</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.type"></a>

```go
func Type() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a>

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.destinationCidr">DestinationCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.flowLogType">FlowLogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.ruleAction">RuleAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.samplingRate">SamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.sourceCidr">SourceCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRules">DataOciCoreCaptureFilterFlowLogCaptureFilterRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationCidr`<sup>Required</sup> <a name="DestinationCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.destinationCidr"></a>

```go
func DestinationCidr() *string
```

- *Type:* *string

---

##### `FlowLogType`<sup>Required</sup> <a name="FlowLogType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.flowLogType"></a>

```go
func FlowLogType() *string
```

- *Type:* *string

---

##### `IcmpOptions`<sup>Required</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.icmpOptions"></a>

```go
func IcmpOptions() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsList</a>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.ruleAction"></a>

```go
func RuleAction() *string
```

- *Type:* *string

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.samplingRate"></a>

```go
func SamplingRate() *f64
```

- *Type:* *f64

---

##### `SourceCidr`<sup>Required</sup> <a name="SourceCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.sourceCidr"></a>

```go
func SourceCidr() *string
```

- *Type:* *string

---

##### `TcpOptions`<sup>Required</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.tcpOptions"></a>

```go
func TcpOptions() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList</a>

---

##### `UdpOptions`<sup>Required</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.udpOptions"></a>

```go
func UdpOptions() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterFlowLogCaptureFilterRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRules">DataOciCoreCaptureFilterFlowLogCaptureFilterRules</a>

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange"></a>

```go
func DestinationPortRange() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList</a>

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a>

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange"></a>

```go
func DestinationPortRange() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList</a>

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a>

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference <a name="DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">DataOciCoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.type">Type</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.type"></a>

```go
func Type() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a>

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesList <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.destinationCidr">DestinationCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList">DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.ruleAction">RuleAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.sourceCidr">SourceCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList">DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.trafficDirection">TrafficDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList">DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRules">DataOciCoreCaptureFilterVtapCaptureFilterRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationCidr`<sup>Required</sup> <a name="DestinationCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.destinationCidr"></a>

```go
func DestinationCidr() *string
```

- *Type:* *string

---

##### `IcmpOptions`<sup>Required</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.icmpOptions"></a>

```go
func IcmpOptions() DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList">DataOciCoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsList</a>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.ruleAction"></a>

```go
func RuleAction() *string
```

- *Type:* *string

---

##### `SourceCidr`<sup>Required</sup> <a name="SourceCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.sourceCidr"></a>

```go
func SourceCidr() *string
```

- *Type:* *string

---

##### `TcpOptions`<sup>Required</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.tcpOptions"></a>

```go
func TcpOptions() DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList">DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList</a>

---

##### `TrafficDirection`<sup>Required</sup> <a name="TrafficDirection" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.trafficDirection"></a>

```go
func TrafficDirection() *string
```

- *Type:* *string

---

##### `UdpOptions`<sup>Required</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.udpOptions"></a>

```go
func UdpOptions() DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList">DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterVtapCaptureFilterRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRules">DataOciCoreCaptureFilterVtapCaptureFilterRules</a>

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList">DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList">DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions">DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange"></a>

```go
func DestinationPortRange() DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList">DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList</a>

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList">DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions">DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a>

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">DataOciCoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList">DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList">DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions">DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange"></a>

```go
func DestinationPortRange() DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList">DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList</a>

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList">DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions">DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a>

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.get"></a>

```go
func Get(index *f64) DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference <a name="DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecapturefilter"

dataocicorecapturefilter.NewDataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilter.DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">DataOciCoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

---



