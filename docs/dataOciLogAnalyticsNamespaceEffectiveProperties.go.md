# `dataOciLogAnalyticsNamespaceEffectiveProperties` Submodule <a name="`dataOciLogAnalyticsNamespaceEffectiveProperties` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceEffectiveProperties <a name="DataOciLogAnalyticsNamespaceEffectiveProperties" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties oci_log_analytics_namespace_effective_properties}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

dataociloganalyticsnamespaceeffectiveproperties.NewDataOciLogAnalyticsNamespaceEffectiveProperties(scope Construct, id *string, config DataOciLogAnalyticsNamespaceEffectivePropertiesConfig) DataOciLogAnalyticsNamespaceEffectiveProperties
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig">DataOciLogAnalyticsNamespaceEffectivePropertiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig">DataOciLogAnalyticsNamespaceEffectivePropertiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetAgentId">ResetAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetEntityId">ResetEntityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetIsIncludePatterns">ResetIsIncludePatterns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetPatternId">ResetPatternId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetSourceName">ResetSourceName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAgentId` <a name="ResetAgentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetAgentId"></a>

```go
func ResetAgentId()
```

##### `ResetEntityId` <a name="ResetEntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetEntityId"></a>

```go
func ResetEntityId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetId"></a>

```go
func ResetId()
```

##### `ResetIsIncludePatterns` <a name="ResetIsIncludePatterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetIsIncludePatterns"></a>

```go
func ResetIsIncludePatterns()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetName"></a>

```go
func ResetName()
```

##### `ResetPatternId` <a name="ResetPatternId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetPatternId"></a>

```go
func ResetPatternId()
```

##### `ResetSourceName` <a name="ResetSourceName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.resetSourceName"></a>

```go
func ResetSourceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceEffectiveProperties resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

dataociloganalyticsnamespaceeffectiveproperties.DataOciLogAnalyticsNamespaceEffectiveProperties_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

dataociloganalyticsnamespaceeffectiveproperties.DataOciLogAnalyticsNamespaceEffectiveProperties_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

dataociloganalyticsnamespaceeffectiveproperties.DataOciLogAnalyticsNamespaceEffectiveProperties_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

dataociloganalyticsnamespaceeffectiveproperties.DataOciLogAnalyticsNamespaceEffectiveProperties_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceEffectiveProperties resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceEffectiveProperties to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLogAnalyticsNamespaceEffectiveProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceEffectiveProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.effectivePropertyCollection">EffectivePropertyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList">DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.agentIdInput">AgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.entityIdInput">EntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.isIncludePatternsInput">IsIncludePatternsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.patternIdInput">PatternIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.sourceNameInput">SourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.isIncludePatterns">IsIncludePatterns</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.patternId">PatternId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `EffectivePropertyCollection`<sup>Required</sup> <a name="EffectivePropertyCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.effectivePropertyCollection"></a>

```go
func EffectivePropertyCollection() DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.filter"></a>

```go
func Filter() DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList">DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList</a>

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.agentIdInput"></a>

```go
func AgentIdInput() *string
```

- *Type:* *string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.entityIdInput"></a>

```go
func EntityIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsIncludePatternsInput`<sup>Optional</sup> <a name="IsIncludePatternsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.isIncludePatternsInput"></a>

```go
func IsIncludePatternsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PatternIdInput`<sup>Optional</sup> <a name="PatternIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.patternIdInput"></a>

```go
func PatternIdInput() *f64
```

- *Type:* *f64

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.sourceNameInput"></a>

```go
func SourceNameInput() *string
```

- *Type:* *string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsIncludePatterns`<sup>Required</sup> <a name="IsIncludePatterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.isIncludePatterns"></a>

```go
func IsIncludePatterns() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PatternId`<sup>Required</sup> <a name="PatternId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.patternId"></a>

```go
func PatternId() *f64
```

- *Type:* *f64

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectiveProperties.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceEffectivePropertiesConfig <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

&dataociloganalyticsnamespaceeffectiveproperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Namespace: *string,
	AgentId: *string,
	EntityId: *string,
	Filter: interface{},
	Id: *string,
	IsIncludePatterns: interface{},
	Name: *string,
	PatternId: *f64,
	SourceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#namespace DataOciLogAnalyticsNamespaceEffectiveProperties#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.agentId">AgentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#agent_id DataOciLogAnalyticsNamespaceEffectiveProperties#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.entityId">EntityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#entity_id DataOciLogAnalyticsNamespaceEffectiveProperties#entity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#id DataOciLogAnalyticsNamespaceEffectiveProperties#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.isIncludePatterns">IsIncludePatterns</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#is_include_patterns DataOciLogAnalyticsNamespaceEffectiveProperties#is_include_patterns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#name DataOciLogAnalyticsNamespaceEffectiveProperties#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.patternId">PatternId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#pattern_id DataOciLogAnalyticsNamespaceEffectiveProperties#pattern_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.sourceName">SourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#source_name DataOciLogAnalyticsNamespaceEffectiveProperties#source_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#namespace DataOciLogAnalyticsNamespaceEffectiveProperties#namespace}.

---

##### `AgentId`<sup>Optional</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.agentId"></a>

```go
AgentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#agent_id DataOciLogAnalyticsNamespaceEffectiveProperties#agent_id}.

---

##### `EntityId`<sup>Optional</sup> <a name="EntityId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.entityId"></a>

```go
EntityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#entity_id DataOciLogAnalyticsNamespaceEffectiveProperties#entity_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#filter DataOciLogAnalyticsNamespaceEffectiveProperties#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#id DataOciLogAnalyticsNamespaceEffectiveProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsIncludePatterns`<sup>Optional</sup> <a name="IsIncludePatterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.isIncludePatterns"></a>

```go
IsIncludePatterns interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#is_include_patterns DataOciLogAnalyticsNamespaceEffectiveProperties#is_include_patterns}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#name DataOciLogAnalyticsNamespaceEffectiveProperties#name}.

---

##### `PatternId`<sup>Optional</sup> <a name="PatternId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.patternId"></a>

```go
PatternId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#pattern_id DataOciLogAnalyticsNamespaceEffectiveProperties#pattern_id}.

---

##### `SourceName`<sup>Optional</sup> <a name="SourceName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesConfig.property.sourceName"></a>

```go
SourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#source_name DataOciLogAnalyticsNamespaceEffectiveProperties#source_name}.

---

### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

&dataociloganalyticsnamespaceeffectiveproperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection {

}
```


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

&dataociloganalyticsnamespaceeffectiveproperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems {

}
```


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

&dataociloganalyticsnamespaceeffectiveproperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns {

}
```


### DataOciLogAnalyticsNamespaceEffectivePropertiesFilter <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

&dataociloganalyticsnamespaceeffectiveproperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#name DataOciLogAnalyticsNamespaceEffectiveProperties#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#values DataOciLogAnalyticsNamespaceEffectiveProperties#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#regex DataOciLogAnalyticsNamespaceEffectiveProperties#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#name DataOciLogAnalyticsNamespaceEffectiveProperties#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#values DataOciLogAnalyticsNamespaceEffectiveProperties#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_effective_properties#regex DataOciLogAnalyticsNamespaceEffectiveProperties#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

dataociloganalyticsnamespaceeffectiveproperties.NewDataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

dataociloganalyticsnamespaceeffectiveproperties.NewDataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.effectiveLevel">EffectiveLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.patterns">Patterns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveLevel`<sup>Required</sup> <a name="EffectiveLevel" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.effectiveLevel"></a>

```go
func EffectiveLevel() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Patterns`<sup>Required</sup> <a name="Patterns" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.patterns"></a>

```go
func Patterns() DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItems</a>

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

dataociloganalyticsnamespaceeffectiveproperties.NewDataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

dataociloganalyticsnamespaceeffectiveproperties.NewDataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.effectiveLevel">EffectiveLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveLevel`<sup>Required</sup> <a name="EffectiveLevel" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.effectiveLevel"></a>

```go
func EffectiveLevel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatternsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsPatterns</a>

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

dataociloganalyticsnamespaceeffectiveproperties.NewDataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

dataociloganalyticsnamespaceeffectiveproperties.NewDataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.items"></a>

```go
func Items() DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection">DataOciLogAnalyticsNamespaceEffectivePropertiesEffectivePropertyCollection</a>

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

dataociloganalyticsnamespaceeffectiveproperties.NewDataOciLogAnalyticsNamespaceEffectivePropertiesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference <a name="DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceeffectiveproperties"

dataociloganalyticsnamespaceeffectiveproperties.NewDataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceEffectiveProperties.DataOciLogAnalyticsNamespaceEffectivePropertiesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



