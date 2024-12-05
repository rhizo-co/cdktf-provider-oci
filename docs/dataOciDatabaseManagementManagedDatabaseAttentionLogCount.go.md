# `dataOciDatabaseManagementManagedDatabaseAttentionLogCount` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseAttentionLogCount` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseAttentionLogCount <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count oci_database_management_managed_database_attention_log_count}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseattentionlogcount"

dataocidatabasemanagementmanageddatabaseattentionlogcount.NewDataOciDatabaseManagementManagedDatabaseAttentionLogCount(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig) DataOciDatabaseManagementManagedDatabaseAttentionLogCount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig">DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig">DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetIsRegularExpression">ResetIsRegularExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetLogSearchText">ResetLogSearchText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTimeGreaterThanOrEqualTo">ResetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTimeLessThanOrEqualTo">ResetTimeLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTypeFilter">ResetTypeFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetUrgencyFilter">ResetUrgencyFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetGroupBy"></a>

```go
func ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetId"></a>

```go
func ResetId()
```

##### `ResetIsRegularExpression` <a name="ResetIsRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetIsRegularExpression"></a>

```go
func ResetIsRegularExpression()
```

##### `ResetLogSearchText` <a name="ResetLogSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetLogSearchText"></a>

```go
func ResetLogSearchText()
```

##### `ResetTimeGreaterThanOrEqualTo` <a name="ResetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTimeGreaterThanOrEqualTo"></a>

```go
func ResetTimeGreaterThanOrEqualTo()
```

##### `ResetTimeLessThanOrEqualTo` <a name="ResetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTimeLessThanOrEqualTo"></a>

```go
func ResetTimeLessThanOrEqualTo()
```

##### `ResetTypeFilter` <a name="ResetTypeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTypeFilter"></a>

```go
func ResetTypeFilter()
```

##### `ResetUrgencyFilter` <a name="ResetUrgencyFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetUrgencyFilter"></a>

```go
func ResetUrgencyFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAttentionLogCount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseattentionlogcount"

dataocidatabasemanagementmanageddatabaseattentionlogcount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseattentionlogcount"

dataocidatabasemanagementmanageddatabaseattentionlogcount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseattentionlogcount"

dataocidatabasemanagementmanageddatabaseattentionlogcount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseattentionlogcount"

dataocidatabasemanagementmanageddatabaseattentionlogcount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAttentionLogCount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseAttentionLogCount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabaseAttentionLogCount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseAttentionLogCount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList">DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.groupByInput">GroupByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.isRegularExpressionInput">IsRegularExpressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.logSearchTextInput">LogSearchTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeGreaterThanOrEqualToInput">TimeGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeLessThanOrEqualToInput">TimeLessThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.typeFilterInput">TypeFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.urgencyFilterInput">UrgencyFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.groupBy">GroupBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.isRegularExpression">IsRegularExpression</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.logSearchText">LogSearchText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeGreaterThanOrEqualTo">TimeGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeLessThanOrEqualTo">TimeLessThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.typeFilter">TypeFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.urgencyFilter">UrgencyFilter</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList">DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList</a>

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.groupByInput"></a>

```go
func GroupByInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsRegularExpressionInput`<sup>Optional</sup> <a name="IsRegularExpressionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.isRegularExpressionInput"></a>

```go
func IsRegularExpressionInput() interface{}
```

- *Type:* interface{}

---

##### `LogSearchTextInput`<sup>Optional</sup> <a name="LogSearchTextInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.logSearchTextInput"></a>

```go
func LogSearchTextInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `TimeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeGreaterThanOrEqualToInput"></a>

```go
func TimeGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeLessThanOrEqualToInput`<sup>Optional</sup> <a name="TimeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeLessThanOrEqualToInput"></a>

```go
func TimeLessThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TypeFilterInput`<sup>Optional</sup> <a name="TypeFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.typeFilterInput"></a>

```go
func TypeFilterInput() *string
```

- *Type:* *string

---

##### `UrgencyFilterInput`<sup>Optional</sup> <a name="UrgencyFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.urgencyFilterInput"></a>

```go
func UrgencyFilterInput() *string
```

- *Type:* *string

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.groupBy"></a>

```go
func GroupBy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsRegularExpression`<sup>Required</sup> <a name="IsRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.isRegularExpression"></a>

```go
func IsRegularExpression() interface{}
```

- *Type:* interface{}

---

##### `LogSearchText`<sup>Required</sup> <a name="LogSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.logSearchText"></a>

```go
func LogSearchText() *string
```

- *Type:* *string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `TimeGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeGreaterThanOrEqualTo"></a>

```go
func TimeGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeLessThanOrEqualTo`<sup>Required</sup> <a name="TimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeLessThanOrEqualTo"></a>

```go
func TimeLessThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TypeFilter`<sup>Required</sup> <a name="TypeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.typeFilter"></a>

```go
func TypeFilter() *string
```

- *Type:* *string

---

##### `UrgencyFilter`<sup>Required</sup> <a name="UrgencyFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.urgencyFilter"></a>

```go
func UrgencyFilter() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseattentionlogcount"

&dataocidatabasemanagementmanageddatabaseattentionlogcount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedDatabaseId: *string,
	GroupBy: *string,
	Id: *string,
	IsRegularExpression: interface{},
	LogSearchText: *string,
	TimeGreaterThanOrEqualTo: *string,
	TimeLessThanOrEqualTo: *string,
	TypeFilter: *string,
	UrgencyFilter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#managed_database_id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.groupBy">GroupBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#group_by DataOciDatabaseManagementManagedDatabaseAttentionLogCount#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.isRegularExpression">IsRegularExpression</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#is_regular_expression DataOciDatabaseManagementManagedDatabaseAttentionLogCount#is_regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.logSearchText">LogSearchText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#log_search_text DataOciDatabaseManagementManagedDatabaseAttentionLogCount#log_search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.timeGreaterThanOrEqualTo">TimeGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.timeLessThanOrEqualTo">TimeLessThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.typeFilter">TypeFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#type_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#type_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.urgencyFilter">UrgencyFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#urgency_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#urgency_filter}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#managed_database_id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#managed_database_id}.

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.groupBy"></a>

```go
GroupBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#group_by DataOciDatabaseManagementManagedDatabaseAttentionLogCount#group_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsRegularExpression`<sup>Optional</sup> <a name="IsRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.isRegularExpression"></a>

```go
IsRegularExpression interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#is_regular_expression DataOciDatabaseManagementManagedDatabaseAttentionLogCount#is_regular_expression}.

---

##### `LogSearchText`<sup>Optional</sup> <a name="LogSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.logSearchText"></a>

```go
LogSearchText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#log_search_text DataOciDatabaseManagementManagedDatabaseAttentionLogCount#log_search_text}.

---

##### `TimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.timeGreaterThanOrEqualTo"></a>

```go
TimeGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_greater_than_or_equal_to}.

---

##### `TimeLessThanOrEqualTo`<sup>Optional</sup> <a name="TimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.timeLessThanOrEqualTo"></a>

```go
TimeLessThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_less_than_or_equal_to}.

---

##### `TypeFilter`<sup>Optional</sup> <a name="TypeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.typeFilter"></a>

```go
TypeFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#type_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#type_filter}.

---

##### `UrgencyFilter`<sup>Optional</sup> <a name="UrgencyFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.urgencyFilter"></a>

```go
UrgencyFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#urgency_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#urgency_filter}.

---

### DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseattentionlogcount"

&dataocidatabasemanagementmanageddatabaseattentionlogcount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseattentionlogcount"

dataocidatabasemanagementmanageddatabaseattentionlogcount.NewDataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseattentionlogcount"

dataocidatabasemanagementmanageddatabaseattentionlogcount.NewDataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems">DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems">DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems</a>

---



