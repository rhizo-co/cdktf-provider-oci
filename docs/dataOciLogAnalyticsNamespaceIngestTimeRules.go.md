# `dataOciLogAnalyticsNamespaceIngestTimeRules` Submodule <a name="`dataOciLogAnalyticsNamespaceIngestTimeRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRules <a name="DataOciLogAnalyticsNamespaceIngestTimeRules" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules oci_log_analytics_namespace_ingest_time_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

dataociloganalyticsnamespaceingesttimerules.NewDataOciLogAnalyticsNamespaceIngestTimeRules(scope Construct, id *string, config DataOciLogAnalyticsNamespaceIngestTimeRulesConfig) DataOciLogAnalyticsNamespaceIngestTimeRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig">DataOciLogAnalyticsNamespaceIngestTimeRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig">DataOciLogAnalyticsNamespaceIngestTimeRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetConditionKind">ResetConditionKind</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFieldValue">ResetFieldValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConditionKind` <a name="ResetConditionKind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetConditionKind"></a>

```go
func ResetConditionKind()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFieldName` <a name="ResetFieldName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFieldName"></a>

```go
func ResetFieldName()
```

##### `ResetFieldValue` <a name="ResetFieldValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFieldValue"></a>

```go
func ResetFieldValue()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceIngestTimeRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

dataociloganalyticsnamespaceingesttimerules.DataOciLogAnalyticsNamespaceIngestTimeRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

dataociloganalyticsnamespaceingesttimerules.DataOciLogAnalyticsNamespaceIngestTimeRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

dataociloganalyticsnamespaceingesttimerules.DataOciLogAnalyticsNamespaceIngestTimeRules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

dataociloganalyticsnamespaceingesttimerules.DataOciLogAnalyticsNamespaceIngestTimeRules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceIngestTimeRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceIngestTimeRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLogAnalyticsNamespaceIngestTimeRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceIngestTimeRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList">DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.ingestTimeRuleSummaryCollection">IngestTimeRuleSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.conditionKindInput">ConditionKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldNameInput">FieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldValueInput">FieldValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.conditionKind">ConditionKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldValue">FieldValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.filter"></a>

```go
func Filter() DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList">DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList</a>

---

##### `IngestTimeRuleSummaryCollection`<sup>Required</sup> <a name="IngestTimeRuleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.ingestTimeRuleSummaryCollection"></a>

```go
func IngestTimeRuleSummaryCollection() DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConditionKindInput`<sup>Optional</sup> <a name="ConditionKindInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.conditionKindInput"></a>

```go
func ConditionKindInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldNameInput"></a>

```go
func FieldNameInput() *string
```

- *Type:* *string

---

##### `FieldValueInput`<sup>Optional</sup> <a name="FieldValueInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldValueInput"></a>

```go
func FieldValueInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConditionKind`<sup>Required</sup> <a name="ConditionKind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.conditionKind"></a>

```go
func ConditionKind() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `FieldValue`<sup>Required</sup> <a name="FieldValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.fieldValue"></a>

```go
func FieldValue() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRulesConfig <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

&dataociloganalyticsnamespaceingesttimerules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Namespace: *string,
	ConditionKind: *string,
	DisplayName: *string,
	FieldName: *string,
	FieldValue: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#compartment_id DataOciLogAnalyticsNamespaceIngestTimeRules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#namespace DataOciLogAnalyticsNamespaceIngestTimeRules#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.conditionKind">ConditionKind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#condition_kind DataOciLogAnalyticsNamespaceIngestTimeRules#condition_kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#display_name DataOciLogAnalyticsNamespaceIngestTimeRules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.fieldName">FieldName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_name DataOciLogAnalyticsNamespaceIngestTimeRules#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.fieldValue">FieldValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_value DataOciLogAnalyticsNamespaceIngestTimeRules#field_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#id DataOciLogAnalyticsNamespaceIngestTimeRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#state DataOciLogAnalyticsNamespaceIngestTimeRules#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#compartment_id DataOciLogAnalyticsNamespaceIngestTimeRules#compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#namespace DataOciLogAnalyticsNamespaceIngestTimeRules#namespace}.

---

##### `ConditionKind`<sup>Optional</sup> <a name="ConditionKind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.conditionKind"></a>

```go
ConditionKind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#condition_kind DataOciLogAnalyticsNamespaceIngestTimeRules#condition_kind}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#display_name DataOciLogAnalyticsNamespaceIngestTimeRules#display_name}.

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.fieldName"></a>

```go
FieldName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_name DataOciLogAnalyticsNamespaceIngestTimeRules#field_name}.

---

##### `FieldValue`<sup>Optional</sup> <a name="FieldValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.fieldValue"></a>

```go
FieldValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#field_value DataOciLogAnalyticsNamespaceIngestTimeRules#field_value}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#filter DataOciLogAnalyticsNamespaceIngestTimeRules#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#id DataOciLogAnalyticsNamespaceIngestTimeRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#state DataOciLogAnalyticsNamespaceIngestTimeRules#state}.

---

### DataOciLogAnalyticsNamespaceIngestTimeRulesFilter <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

&dataociloganalyticsnamespaceingesttimerules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#name DataOciLogAnalyticsNamespaceIngestTimeRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#values DataOciLogAnalyticsNamespaceIngestTimeRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#regex DataOciLogAnalyticsNamespaceIngestTimeRules#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#name DataOciLogAnalyticsNamespaceIngestTimeRules#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#values DataOciLogAnalyticsNamespaceIngestTimeRules#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rules#regex DataOciLogAnalyticsNamespaceIngestTimeRules#regex}.

---

### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

&dataociloganalyticsnamespaceingesttimerules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection {

}
```


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

&dataociloganalyticsnamespaceingesttimerules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

dataociloganalyticsnamespaceingesttimerules.NewDataOciLogAnalyticsNamespaceIngestTimeRulesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

dataociloganalyticsnamespaceingesttimerules.NewDataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

dataociloganalyticsnamespaceingesttimerules.NewDataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

dataociloganalyticsnamespaceingesttimerules.NewDataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.conditionKind">ConditionKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fieldValue">FieldValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConditionKind`<sup>Required</sup> <a name="ConditionKind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.conditionKind"></a>

```go
func ConditionKind() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `FieldValue`<sup>Required</sup> <a name="FieldValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.fieldValue"></a>

```go
func FieldValue() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItems</a>

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

dataociloganalyticsnamespaceingesttimerules.NewDataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespaceingesttimerules"

dataociloganalyticsnamespaceingesttimerules.NewDataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRules.DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection">DataOciLogAnalyticsNamespaceIngestTimeRulesIngestTimeRuleSummaryCollection</a>

---



