# `dataOciDatabaseManagementManagedDatabase` Submodule <a name="`dataOciDatabaseManagementManagedDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabase <a name="DataOciDatabaseManagementManagedDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database oci_database_management_managed_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.NewDataOciDatabaseManagementManagedDatabase(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabaseConfig) DataOciDatabaseManagementManagedDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig">DataOciDatabaseManagementManagedDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig">DataOciDatabaseManagementManagedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.resetDatabasePlatformName">ResetDatabasePlatformName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDatabasePlatformName` <a name="ResetDatabasePlatformName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.resetDatabasePlatformName"></a>

```go
func ResetDatabasePlatformName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.DataOciDatabaseManagementManagedDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.DataOciDatabaseManagementManagedDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.DataOciDatabaseManagementManagedDatabase_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.DataOciDatabaseManagementManagedDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.additionalDetails">AdditionalDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.databaseStatus">DatabaseStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.databaseSubType">DatabaseSubType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.dbmgmtFeatureConfigs">DbmgmtFeatureConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.isCluster">IsCluster</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.managedDatabaseGroups">ManagedDatabaseGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList">DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.managementOption">ManagementOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.parentContainerId">ParentContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.storageSystemId">StorageSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.workloadType">WorkloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.databasePlatformNameInput">DatabasePlatformNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.databasePlatformName">DatabasePlatformName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.additionalDetails"></a>

```go
func AdditionalDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseStatus`<sup>Required</sup> <a name="DatabaseStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.databaseStatus"></a>

```go
func DatabaseStatus() *string
```

- *Type:* *string

---

##### `DatabaseSubType`<sup>Required</sup> <a name="DatabaseSubType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.databaseSubType"></a>

```go
func DatabaseSubType() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `DbmgmtFeatureConfigs`<sup>Required</sup> <a name="DbmgmtFeatureConfigs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.dbmgmtFeatureConfigs"></a>

```go
func DbmgmtFeatureConfigs() DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList</a>

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IsCluster`<sup>Required</sup> <a name="IsCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.isCluster"></a>

```go
func IsCluster() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ManagedDatabaseGroups`<sup>Required</sup> <a name="ManagedDatabaseGroups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.managedDatabaseGroups"></a>

```go
func ManagedDatabaseGroups() DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList">DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList</a>

---

##### `ManagementOption`<sup>Required</sup> <a name="ManagementOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.managementOption"></a>

```go
func ManagementOption() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentContainerId`<sup>Required</sup> <a name="ParentContainerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.parentContainerId"></a>

```go
func ParentContainerId() *string
```

- *Type:* *string

---

##### `StorageSystemId`<sup>Required</sup> <a name="StorageSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.storageSystemId"></a>

```go
func StorageSystemId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.workloadType"></a>

```go
func WorkloadType() *string
```

- *Type:* *string

---

##### `DatabasePlatformNameInput`<sup>Optional</sup> <a name="DatabasePlatformNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.databasePlatformNameInput"></a>

```go
func DatabasePlatformNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `DatabasePlatformName`<sup>Required</sup> <a name="DatabasePlatformName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.databasePlatformName"></a>

```go
func DatabasePlatformName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseConfig <a name="DataOciDatabaseManagementManagedDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

&dataocidatabasemanagementmanageddatabase.DataOciDatabaseManagementManagedDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedDatabaseId: *string,
	DatabasePlatformName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database#managed_database_id DataOciDatabaseManagementManagedDatabase#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.databasePlatformName">DatabasePlatformName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database#database_platform_name DataOciDatabaseManagementManagedDatabase#database_platform_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database#id DataOciDatabaseManagementManagedDatabase#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database#managed_database_id DataOciDatabaseManagementManagedDatabase#managed_database_id}.

---

##### `DatabasePlatformName`<sup>Optional</sup> <a name="DatabasePlatformName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.databasePlatformName"></a>

```go
DatabasePlatformName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database#database_platform_name DataOciDatabaseManagementManagedDatabase#database_platform_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database#id DataOciDatabaseManagementManagedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigs <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

&dataocidatabasemanagementmanageddatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigs {

}
```


### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

&dataocidatabasemanagementmanageddatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails {

}
```


### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

&dataocidatabasemanagementmanageddatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails {

}
```


### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

&dataocidatabasemanagementmanageddatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials {

}
```


### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

&dataocidatabasemanagementmanageddatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString {

}
```


### DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroups <a name="DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

&dataocidatabasemanagementmanageddatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroups {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.NewDataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.NewDataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.connectorType">ConnectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.databaseConnectorId">DatabaseConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.privateEndPointId">PrivateEndPointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.connectorType"></a>

```go
func ConnectorType() *string
```

- *Type:* *string

---

##### `DatabaseConnectorId`<sup>Required</sup> <a name="DatabaseConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.databaseConnectorId"></a>

```go
func DatabaseConnectorId() *string
```

- *Type:* *string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.managementAgentId"></a>

```go
func ManagementAgentId() *string
```

- *Type:* *string

---

##### `PrivateEndPointId`<sup>Required</sup> <a name="PrivateEndPointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.privateEndPointId"></a>

```go
func PrivateEndPointId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetails</a>

---


### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.NewDataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.NewDataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialName">CredentialName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialId">NamedCredentialId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretId">SslSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialName"></a>

```go
func CredentialName() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `NamedCredentialId`<sup>Required</sup> <a name="NamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialId"></a>

```go
func NamedCredentialId() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SslSecretId`<sup>Required</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretId"></a>

```go
func SslSecretId() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentials</a>

---


### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.NewDataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.NewDataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionString</a>

---


### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.NewDataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.NewDataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionCredentials">ConnectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionString">ConnectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionCredentials`<sup>Required</sup> <a name="ConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionCredentials"></a>

```go
func ConnectionCredentials() DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionCredentialsList</a>

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.connectionString"></a>

```go
func ConnectionString() DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsConnectionStringList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetails</a>

---


### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.NewDataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.NewDataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.connectorDetails">ConnectorDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.databaseConnectionDetails">DatabaseConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.feature">Feature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.featureStatus">FeatureStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigs">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorDetails`<sup>Required</sup> <a name="ConnectorDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.connectorDetails"></a>

```go
func ConnectorDetails() DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsConnectorDetailsList</a>

---

##### `DatabaseConnectionDetails`<sup>Required</sup> <a name="DatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.databaseConnectionDetails"></a>

```go
func DatabaseConnectionDetails() DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsDatabaseConnectionDetailsList</a>

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.feature"></a>

```go
func Feature() *string
```

- *Type:* *string

---

##### `FeatureStatus`<sup>Required</sup> <a name="FeatureStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.featureStatus"></a>

```go
func FeatureStatus() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigs">DataOciDatabaseManagementManagedDatabaseDbmgmtFeatureConfigs</a>

---


### DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList <a name="DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.NewDataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabase"

dataocidatabasemanagementmanageddatabase.NewDataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroups">DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabase.DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroups">DataOciDatabaseManagementManagedDatabaseManagedDatabaseGroups</a>

---



