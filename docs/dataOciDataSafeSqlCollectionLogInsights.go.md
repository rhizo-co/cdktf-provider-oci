# `dataOciDataSafeSqlCollectionLogInsights` Submodule <a name="`dataOciDataSafeSqlCollectionLogInsights` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlCollectionLogInsights <a name="DataOciDataSafeSqlCollectionLogInsights" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights oci_data_safe_sql_collection_log_insights}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

dataocidatasafesqlcollectionloginsights.NewDataOciDataSafeSqlCollectionLogInsights(scope Construct, id *string, config DataOciDataSafeSqlCollectionLogInsightsConfig) DataOciDataSafeSqlCollectionLogInsights
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig">DataOciDataSafeSqlCollectionLogInsightsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig">DataOciDataSafeSqlCollectionLogInsightsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetGroupBy"></a>

```go
func ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlCollectionLogInsights resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

dataocidatasafesqlcollectionloginsights.DataOciDataSafeSqlCollectionLogInsights_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

dataocidatasafesqlcollectionloginsights.DataOciDataSafeSqlCollectionLogInsights_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

dataocidatasafesqlcollectionloginsights.DataOciDataSafeSqlCollectionLogInsights_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

dataocidatasafesqlcollectionloginsights.DataOciDataSafeSqlCollectionLogInsights_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeSqlCollectionLogInsights resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeSqlCollectionLogInsights to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeSqlCollectionLogInsights that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlCollectionLogInsights to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList">DataOciDataSafeSqlCollectionLogInsightsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionLogInsightsCollection">SqlCollectionLogInsightsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupByInput">GroupByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionIdInput">SqlCollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEndedInput">TimeEndedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStartedInput">TimeStartedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupBy">GroupBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionId">SqlCollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filter"></a>

```go
func Filter() DataOciDataSafeSqlCollectionLogInsightsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList">DataOciDataSafeSqlCollectionLogInsightsFilterList</a>

---

##### `SqlCollectionLogInsightsCollection`<sup>Required</sup> <a name="SqlCollectionLogInsightsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionLogInsightsCollection"></a>

```go
func SqlCollectionLogInsightsCollection() DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupByInput"></a>

```go
func GroupByInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SqlCollectionIdInput`<sup>Optional</sup> <a name="SqlCollectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionIdInput"></a>

```go
func SqlCollectionIdInput() *string
```

- *Type:* *string

---

##### `TimeEndedInput`<sup>Optional</sup> <a name="TimeEndedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEndedInput"></a>

```go
func TimeEndedInput() *string
```

- *Type:* *string

---

##### `TimeStartedInput`<sup>Optional</sup> <a name="TimeStartedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStartedInput"></a>

```go
func TimeStartedInput() *string
```

- *Type:* *string

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.groupBy"></a>

```go
func GroupBy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SqlCollectionId`<sup>Required</sup> <a name="SqlCollectionId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.sqlCollectionId"></a>

```go
func SqlCollectionId() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsights.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlCollectionLogInsightsConfig <a name="DataOciDataSafeSqlCollectionLogInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

&dataocidatasafesqlcollectionloginsights.DataOciDataSafeSqlCollectionLogInsightsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SqlCollectionId: *string,
	TimeEnded: *string,
	TimeStarted: *string,
	Filter: interface{},
	GroupBy: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.sqlCollectionId">SqlCollectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#sql_collection_id DataOciDataSafeSqlCollectionLogInsights#sql_collection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_ended DataOciDataSafeSqlCollectionLogInsights#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_started DataOciDataSafeSqlCollectionLogInsights#time_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.groupBy">GroupBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#group_by DataOciDataSafeSqlCollectionLogInsights#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#id DataOciDataSafeSqlCollectionLogInsights#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SqlCollectionId`<sup>Required</sup> <a name="SqlCollectionId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.sqlCollectionId"></a>

```go
SqlCollectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#sql_collection_id DataOciDataSafeSqlCollectionLogInsights#sql_collection_id}.

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeEnded"></a>

```go
TimeEnded *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_ended DataOciDataSafeSqlCollectionLogInsights#time_ended}.

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.timeStarted"></a>

```go
TimeStarted *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#time_started DataOciDataSafeSqlCollectionLogInsights#time_started}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#filter DataOciDataSafeSqlCollectionLogInsights#filter}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.groupBy"></a>

```go
GroupBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#group_by DataOciDataSafeSqlCollectionLogInsights#group_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#id DataOciDataSafeSqlCollectionLogInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeSqlCollectionLogInsightsFilter <a name="DataOciDataSafeSqlCollectionLogInsightsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

&dataocidatasafesqlcollectionloginsights.DataOciDataSafeSqlCollectionLogInsightsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#name DataOciDataSafeSqlCollectionLogInsights#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#values DataOciDataSafeSqlCollectionLogInsights#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#regex DataOciDataSafeSqlCollectionLogInsights#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#name DataOciDataSafeSqlCollectionLogInsights#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#values DataOciDataSafeSqlCollectionLogInsights#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_log_insights#regex DataOciDataSafeSqlCollectionLogInsights#regex}.

---

### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

&dataocidatasafesqlcollectionloginsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection {

}
```


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

&dataocidatasafesqlcollectionloginsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems {

}
```


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

&dataocidatasafesqlcollectionloginsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlCollectionLogInsightsFilterList <a name="DataOciDataSafeSqlCollectionLogInsightsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

dataocidatasafesqlcollectionloginsights.NewDataOciDataSafeSqlCollectionLogInsightsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlCollectionLogInsightsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

dataocidatasafesqlcollectionloginsights.NewDataOciDataSafeSqlCollectionLogInsightsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

dataocidatasafesqlcollectionloginsights.NewDataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

dataocidatasafesqlcollectionloginsights.NewDataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientIp">ClientIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientOsUserName">ClientOsUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientProgram">ClientProgram</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIp`<sup>Required</sup> <a name="ClientIp" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientIp"></a>

```go
func ClientIp() *string
```

- *Type:* *string

---

##### `ClientOsUserName`<sup>Required</sup> <a name="ClientOsUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientOsUserName"></a>

```go
func ClientOsUserName() *string
```

- *Type:* *string

---

##### `ClientProgram`<sup>Required</sup> <a name="ClientProgram" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.clientProgram"></a>

```go
func ClientProgram() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

dataocidatasafesqlcollectionloginsights.NewDataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

dataocidatasafesqlcollectionloginsights.NewDataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.sqlCollectionLogInsightCount">SqlCollectionLogInsightCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.dimensions"></a>

```go
func Dimensions() DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `SqlCollectionLogInsightCount`<sup>Required</sup> <a name="SqlCollectionLogInsightCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.sqlCollectionLogInsightCount"></a>

```go
func SqlCollectionLogInsightCount() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItems</a>

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

dataocidatasafesqlcollectionloginsights.NewDataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference <a name="DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlcollectionloginsights"

dataocidatasafesqlcollectionloginsights.NewDataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionLogInsights.DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection">DataOciDataSafeSqlCollectionLogInsightsSqlCollectionLogInsightsCollection</a>

---



