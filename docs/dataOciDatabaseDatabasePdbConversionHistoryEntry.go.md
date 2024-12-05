# `dataOciDatabaseDatabasePdbConversionHistoryEntry` Submodule <a name="`dataOciDatabaseDatabasePdbConversionHistoryEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabasePdbConversionHistoryEntry <a name="DataOciDatabaseDatabasePdbConversionHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry oci_database_database_pdb_conversion_history_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentry"

dataocidatabasedatabasepdbconversionhistoryentry.NewDataOciDatabaseDatabasePdbConversionHistoryEntry(scope Construct, id *string, config DataOciDatabaseDatabasePdbConversionHistoryEntryConfig) DataOciDatabaseDatabasePdbConversionHistoryEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig">DataOciDatabaseDatabasePdbConversionHistoryEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig">DataOciDatabaseDatabasePdbConversionHistoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabasePdbConversionHistoryEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentry"

dataocidatabasedatabasepdbconversionhistoryentry.DataOciDatabaseDatabasePdbConversionHistoryEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentry"

dataocidatabasedatabasepdbconversionhistoryentry.DataOciDatabaseDatabasePdbConversionHistoryEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentry"

dataocidatabasedatabasepdbconversionhistoryentry.DataOciDatabaseDatabasePdbConversionHistoryEntry_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentry"

dataocidatabasedatabasepdbconversionhistoryentry.DataOciDatabaseDatabasePdbConversionHistoryEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseDatabasePdbConversionHistoryEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseDatabasePdbConversionHistoryEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseDatabasePdbConversionHistoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabasePdbConversionHistoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.additionalCdbParams">AdditionalCdbParams</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.cdbName">CdbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.sourceDatabaseId">SourceDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.targetDatabaseId">TargetDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.pdbConversionHistoryEntryIdInput">PdbConversionHistoryEntryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.pdbConversionHistoryEntryId">PdbConversionHistoryEntryId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `AdditionalCdbParams`<sup>Required</sup> <a name="AdditionalCdbParams" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.additionalCdbParams"></a>

```go
func AdditionalCdbParams() *string
```

- *Type:* *string

---

##### `CdbName`<sup>Required</sup> <a name="CdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.cdbName"></a>

```go
func CdbName() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `SourceDatabaseId`<sup>Required</sup> <a name="SourceDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.sourceDatabaseId"></a>

```go
func SourceDatabaseId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `TargetDatabaseId`<sup>Required</sup> <a name="TargetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.targetDatabaseId"></a>

```go
func TargetDatabaseId() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PdbConversionHistoryEntryIdInput`<sup>Optional</sup> <a name="PdbConversionHistoryEntryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.pdbConversionHistoryEntryIdInput"></a>

```go
func PdbConversionHistoryEntryIdInput() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PdbConversionHistoryEntryId`<sup>Required</sup> <a name="PdbConversionHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.pdbConversionHistoryEntryId"></a>

```go
func PdbConversionHistoryEntryId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabasePdbConversionHistoryEntryConfig <a name="DataOciDatabaseDatabasePdbConversionHistoryEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentry"

&dataocidatabasedatabasepdbconversionhistoryentry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseId: *string,
	PdbConversionHistoryEntryId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.databaseId">DatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry#database_id DataOciDatabaseDatabasePdbConversionHistoryEntry#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.pdbConversionHistoryEntryId">PdbConversionHistoryEntryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry#pdb_conversion_history_entry_id DataOciDatabaseDatabasePdbConversionHistoryEntry#pdb_conversion_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry#id DataOciDatabaseDatabasePdbConversionHistoryEntry#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry#database_id DataOciDatabaseDatabasePdbConversionHistoryEntry#database_id}.

---

##### `PdbConversionHistoryEntryId`<sup>Required</sup> <a name="PdbConversionHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.pdbConversionHistoryEntryId"></a>

```go
PdbConversionHistoryEntryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry#pdb_conversion_history_entry_id DataOciDatabaseDatabasePdbConversionHistoryEntry#pdb_conversion_history_entry_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry#id DataOciDatabaseDatabasePdbConversionHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



