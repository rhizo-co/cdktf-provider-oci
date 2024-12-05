# `dataOciDatabaseMigrationMigrations` Submodule <a name="`dataOciDatabaseMigrationMigrations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMigrationMigrations <a name="DataOciDatabaseMigrationMigrations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migrations oci_database_migration_migrations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrations(scope Construct, id *string, config DataOciDatabaseMigrationMigrationsConfig) DataOciDatabaseMigrationMigrations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig">DataOciDatabaseMigrationMigrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig">DataOciDatabaseMigrationMigrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMigrationMigrations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseMigrationMigrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseMigrationMigrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseMigrationMigrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMigrationMigrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.advancedParameters">AdvancedParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList">DataOciDatabaseMigrationMigrationsAdvancedParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.advisorSettings">AdvisorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList">DataOciDatabaseMigrationMigrationsAdvisorSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.bulkIncludeExcludeData">BulkIncludeExcludeData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.databaseCombination">DatabaseCombination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.dataTransferMediumDetails">DataTransferMediumDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.excludeObjects">ExcludeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList">DataOciDatabaseMigrationMigrationsExcludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.executingJobId">ExecutingJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.ggsDetails">GgsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList">DataOciDatabaseMigrationMigrationsGgsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.hubDetails">HubDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList">DataOciDatabaseMigrationMigrationsHubDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.includeObjects">IncludeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList">DataOciDatabaseMigrationMigrationsIncludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.initialLoadSettings">InitialLoadSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.sourceContainerDatabaseConnectionId">SourceContainerDatabaseConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.sourceDatabaseConnectionId">SourceDatabaseConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.targetDatabaseConnectionId">TargetDatabaseConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.timeLastMigration">TimeLastMigration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.waitAfter">WaitAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.migrationIdInput">MigrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.migrationId">MigrationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdvancedParameters`<sup>Required</sup> <a name="AdvancedParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.advancedParameters"></a>

```go
func AdvancedParameters() DataOciDatabaseMigrationMigrationsAdvancedParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList">DataOciDatabaseMigrationMigrationsAdvancedParametersList</a>

---

##### `AdvisorSettings`<sup>Required</sup> <a name="AdvisorSettings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.advisorSettings"></a>

```go
func AdvisorSettings() DataOciDatabaseMigrationMigrationsAdvisorSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList">DataOciDatabaseMigrationMigrationsAdvisorSettingsList</a>

---

##### `BulkIncludeExcludeData`<sup>Required</sup> <a name="BulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.bulkIncludeExcludeData"></a>

```go
func BulkIncludeExcludeData() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseCombination`<sup>Required</sup> <a name="DatabaseCombination" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.databaseCombination"></a>

```go
func DatabaseCombination() *string
```

- *Type:* *string

---

##### `DataTransferMediumDetails`<sup>Required</sup> <a name="DataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.dataTransferMediumDetails"></a>

```go
func DataTransferMediumDetails() DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExcludeObjects`<sup>Required</sup> <a name="ExcludeObjects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.excludeObjects"></a>

```go
func ExcludeObjects() DataOciDatabaseMigrationMigrationsExcludeObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList">DataOciDatabaseMigrationMigrationsExcludeObjectsList</a>

---

##### `ExecutingJobId`<sup>Required</sup> <a name="ExecutingJobId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.executingJobId"></a>

```go
func ExecutingJobId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GgsDetails`<sup>Required</sup> <a name="GgsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.ggsDetails"></a>

```go
func GgsDetails() DataOciDatabaseMigrationMigrationsGgsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList">DataOciDatabaseMigrationMigrationsGgsDetailsList</a>

---

##### `HubDetails`<sup>Required</sup> <a name="HubDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.hubDetails"></a>

```go
func HubDetails() DataOciDatabaseMigrationMigrationsHubDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList">DataOciDatabaseMigrationMigrationsHubDetailsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeObjects`<sup>Required</sup> <a name="IncludeObjects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.includeObjects"></a>

```go
func IncludeObjects() DataOciDatabaseMigrationMigrationsIncludeObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList">DataOciDatabaseMigrationMigrationsIncludeObjectsList</a>

---

##### `InitialLoadSettings`<sup>Required</sup> <a name="InitialLoadSettings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.initialLoadSettings"></a>

```go
func InitialLoadSettings() DataOciDatabaseMigrationMigrationsInitialLoadSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `SourceContainerDatabaseConnectionId`<sup>Required</sup> <a name="SourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.sourceContainerDatabaseConnectionId"></a>

```go
func SourceContainerDatabaseConnectionId() *string
```

- *Type:* *string

---

##### `SourceDatabaseConnectionId`<sup>Required</sup> <a name="SourceDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.sourceDatabaseConnectionId"></a>

```go
func SourceDatabaseConnectionId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetDatabaseConnectionId`<sup>Required</sup> <a name="TargetDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.targetDatabaseConnectionId"></a>

```go
func TargetDatabaseConnectionId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastMigration`<sup>Required</sup> <a name="TimeLastMigration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.timeLastMigration"></a>

```go
func TimeLastMigration() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WaitAfter`<sup>Required</sup> <a name="WaitAfter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.waitAfter"></a>

```go
func WaitAfter() *string
```

- *Type:* *string

---

##### `MigrationIdInput`<sup>Optional</sup> <a name="MigrationIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.migrationIdInput"></a>

```go
func MigrationIdInput() *string
```

- *Type:* *string

---

##### `MigrationId`<sup>Required</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.migrationId"></a>

```go
func MigrationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMigrationMigrationsAdvancedParameters <a name="DataOciDatabaseMigrationMigrationsAdvancedParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsAdvancedParameters {

}
```


### DataOciDatabaseMigrationMigrationsAdvisorSettings <a name="DataOciDatabaseMigrationMigrationsAdvisorSettings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsAdvisorSettings {

}
```


### DataOciDatabaseMigrationMigrationsConfig <a name="DataOciDatabaseMigrationMigrationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MigrationId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.migrationId">MigrationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migrations#migration_id DataOciDatabaseMigrationMigrations#migration_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MigrationId`<sup>Required</sup> <a name="MigrationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsConfig.property.migrationId"></a>

```go
MigrationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migrations#migration_id DataOciDatabaseMigrationMigrations#migration_id}.

---

### DataOciDatabaseMigrationMigrationsDataTransferMediumDetails <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetails {

}
```


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket {

}
```


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource {

}
```


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget {

}
```


### DataOciDatabaseMigrationMigrationsExcludeObjects <a name="DataOciDatabaseMigrationMigrationsExcludeObjects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjects.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsExcludeObjects {

}
```


### DataOciDatabaseMigrationMigrationsGgsDetails <a name="DataOciDatabaseMigrationMigrationsGgsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsGgsDetails {

}
```


### DataOciDatabaseMigrationMigrationsGgsDetailsExtract <a name="DataOciDatabaseMigrationMigrationsGgsDetailsExtract" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtract.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtract {

}
```


### DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment <a name="DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment {

}
```


### DataOciDatabaseMigrationMigrationsGgsDetailsReplicat <a name="DataOciDatabaseMigrationMigrationsGgsDetailsReplicat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicat.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicat {

}
```


### DataOciDatabaseMigrationMigrationsHubDetails <a name="DataOciDatabaseMigrationMigrationsHubDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsHubDetails {

}
```


### DataOciDatabaseMigrationMigrationsHubDetailsExtract <a name="DataOciDatabaseMigrationMigrationsHubDetailsExtract" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtract.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtract {

}
```


### DataOciDatabaseMigrationMigrationsHubDetailsReplicat <a name="DataOciDatabaseMigrationMigrationsHubDetailsReplicat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicat.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicat {

}
```


### DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials <a name="DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials {

}
```


### DataOciDatabaseMigrationMigrationsIncludeObjects <a name="DataOciDatabaseMigrationMigrationsIncludeObjects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjects.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsIncludeObjects {

}
```


### DataOciDatabaseMigrationMigrationsInitialLoadSettings <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettings {

}
```


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters {

}
```


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject {

}
```


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject {

}
```


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps {

}
```


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

&dataocidatabasemigrationmigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMigrationMigrationsAdvancedParametersList <a name="DataOciDatabaseMigrationMigrationsAdvancedParametersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsAdvancedParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsAdvancedParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference <a name="DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParameters">DataOciDatabaseMigrationMigrationsAdvancedParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsAdvancedParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvancedParameters">DataOciDatabaseMigrationMigrationsAdvancedParameters</a>

---


### DataOciDatabaseMigrationMigrationsAdvisorSettingsList <a name="DataOciDatabaseMigrationMigrationsAdvisorSettingsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsAdvisorSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsAdvisorSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference <a name="DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.isIgnoreErrors">IsIgnoreErrors</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.isSkipAdvisor">IsSkipAdvisor</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettings">DataOciDatabaseMigrationMigrationsAdvisorSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsIgnoreErrors`<sup>Required</sup> <a name="IsIgnoreErrors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.isIgnoreErrors"></a>

```go
func IsIgnoreErrors() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSkipAdvisor`<sup>Required</sup> <a name="IsSkipAdvisor" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.isSkipAdvisor"></a>

```go
func IsSkipAdvisor() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsAdvisorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsAdvisorSettings">DataOciDatabaseMigrationMigrationsAdvisorSettings</a>

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucket</a>

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.objectStorageBucket">ObjectStorageBucket</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId">SharedStorageMountTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetails">DataOciDatabaseMigrationMigrationsDataTransferMediumDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectStorageBucket`<sup>Required</sup> <a name="ObjectStorageBucket" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.objectStorageBucket"></a>

```go
func ObjectStorageBucket() DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsObjectStorageBucketList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.secretAccessKey"></a>

```go
func SecretAccessKey() *string
```

- *Type:* *string

---

##### `SharedStorageMountTargetId`<sup>Required</sup> <a name="SharedStorageMountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId"></a>

```go
func SharedStorageMountTargetId() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.source"></a>

```go
func Source() DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.target"></a>

```go
func Target() DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsDataTransferMediumDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetails">DataOciDatabaseMigrationMigrationsDataTransferMediumDetails</a>

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.ociHome">OciHome</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.walletLocation">WalletLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `OciHome`<sup>Required</sup> <a name="OciHome" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.ociHome"></a>

```go
func OciHome() *string
```

- *Type:* *string

---

##### `WalletLocation`<sup>Required</sup> <a name="WalletLocation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.walletLocation"></a>

```go
func WalletLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsSource</a>

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference <a name="DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.ociHome">OciHome</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.walletLocation">WalletLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `OciHome`<sup>Required</sup> <a name="OciHome" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.ociHome"></a>

```go
func OciHome() *string
```

- *Type:* *string

---

##### `WalletLocation`<sup>Required</sup> <a name="WalletLocation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.walletLocation"></a>

```go
func WalletLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget">DataOciDatabaseMigrationMigrationsDataTransferMediumDetailsTarget</a>

---


### DataOciDatabaseMigrationMigrationsExcludeObjectsList <a name="DataOciDatabaseMigrationMigrationsExcludeObjectsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsExcludeObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsExcludeObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference <a name="DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">IsOmitExcludedTableFromReplication</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjects">DataOciDatabaseMigrationMigrationsExcludeObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsOmitExcludedTableFromReplication`<sup>Required</sup> <a name="IsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```go
func IsOmitExcludedTableFromReplication() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsExcludeObjects
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsExcludeObjects">DataOciDatabaseMigrationMigrationsExcludeObjects</a>

---


### DataOciDatabaseMigrationMigrationsGgsDetailsExtractList <a name="DataOciDatabaseMigrationMigrationsGgsDetailsExtractList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsGgsDetailsExtractList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsGgsDetailsExtractList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference <a name="DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.longTransDuration">LongTransDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.performanceProfile">PerformanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtract">DataOciDatabaseMigrationMigrationsGgsDetailsExtract</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LongTransDuration`<sup>Required</sup> <a name="LongTransDuration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.longTransDuration"></a>

```go
func LongTransDuration() *f64
```

- *Type:* *f64

---

##### `PerformanceProfile`<sup>Required</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.performanceProfile"></a>

```go
func PerformanceProfile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsGgsDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtract">DataOciDatabaseMigrationMigrationsGgsDetailsExtract</a>

---


### DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList <a name="DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference <a name="DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId">GgsAdminCredentialsSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment">DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `GgsAdminCredentialsSecretId`<sup>Required</sup> <a name="GgsAdminCredentialsSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId"></a>

```go
func GgsAdminCredentialsSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment">DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeployment</a>

---


### DataOciDatabaseMigrationMigrationsGgsDetailsList <a name="DataOciDatabaseMigrationMigrationsGgsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsGgsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsGgsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference <a name="DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsGgsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.acceptableLag">AcceptableLag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.extract">Extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList">DataOciDatabaseMigrationMigrationsGgsDetailsExtractList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.ggsDeployment">GgsDeployment</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList">DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.replicat">Replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList">DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetails">DataOciDatabaseMigrationMigrationsGgsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptableLag`<sup>Required</sup> <a name="AcceptableLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.acceptableLag"></a>

```go
func AcceptableLag() *f64
```

- *Type:* *f64

---

##### `Extract`<sup>Required</sup> <a name="Extract" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.extract"></a>

```go
func Extract() DataOciDatabaseMigrationMigrationsGgsDetailsExtractList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsExtractList">DataOciDatabaseMigrationMigrationsGgsDetailsExtractList</a>

---

##### `GgsDeployment`<sup>Required</sup> <a name="GgsDeployment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.ggsDeployment"></a>

```go
func GgsDeployment() DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList">DataOciDatabaseMigrationMigrationsGgsDetailsGgsDeploymentList</a>

---

##### `Replicat`<sup>Required</sup> <a name="Replicat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.replicat"></a>

```go
func Replicat() DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList">DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsGgsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetails">DataOciDatabaseMigrationMigrationsGgsDetails</a>

---


### DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList <a name="DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsGgsDetailsReplicatList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference <a name="DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.performanceProfile">PerformanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicat">DataOciDatabaseMigrationMigrationsGgsDetailsReplicat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PerformanceProfile`<sup>Required</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.performanceProfile"></a>

```go
func PerformanceProfile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicatOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsGgsDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsGgsDetailsReplicat">DataOciDatabaseMigrationMigrationsGgsDetailsReplicat</a>

---


### DataOciDatabaseMigrationMigrationsHubDetailsExtractList <a name="DataOciDatabaseMigrationMigrationsHubDetailsExtractList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsHubDetailsExtractList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsHubDetailsExtractList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference <a name="DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.longTransDuration">LongTransDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.performanceProfile">PerformanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtract">DataOciDatabaseMigrationMigrationsHubDetailsExtract</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LongTransDuration`<sup>Required</sup> <a name="LongTransDuration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.longTransDuration"></a>

```go
func LongTransDuration() *f64
```

- *Type:* *f64

---

##### `PerformanceProfile`<sup>Required</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.performanceProfile"></a>

```go
func PerformanceProfile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsHubDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtract">DataOciDatabaseMigrationMigrationsHubDetailsExtract</a>

---


### DataOciDatabaseMigrationMigrationsHubDetailsList <a name="DataOciDatabaseMigrationMigrationsHubDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsHubDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsHubDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsHubDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsHubDetailsOutputReference <a name="DataOciDatabaseMigrationMigrationsHubDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsHubDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsHubDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.acceptableLag">AcceptableLag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.computeId">ComputeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.extract">Extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList">DataOciDatabaseMigrationMigrationsHubDetailsExtractList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.replicat">Replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList">DataOciDatabaseMigrationMigrationsHubDetailsReplicatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.restAdminCredentials">RestAdminCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList">DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetails">DataOciDatabaseMigrationMigrationsHubDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptableLag`<sup>Required</sup> <a name="AcceptableLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.acceptableLag"></a>

```go
func AcceptableLag() *f64
```

- *Type:* *f64

---

##### `ComputeId`<sup>Required</sup> <a name="ComputeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.computeId"></a>

```go
func ComputeId() *string
```

- *Type:* *string

---

##### `Extract`<sup>Required</sup> <a name="Extract" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.extract"></a>

```go
func Extract() DataOciDatabaseMigrationMigrationsHubDetailsExtractList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsExtractList">DataOciDatabaseMigrationMigrationsHubDetailsExtractList</a>

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `Replicat`<sup>Required</sup> <a name="Replicat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.replicat"></a>

```go
func Replicat() DataOciDatabaseMigrationMigrationsHubDetailsReplicatList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList">DataOciDatabaseMigrationMigrationsHubDetailsReplicatList</a>

---

##### `RestAdminCredentials`<sup>Required</sup> <a name="RestAdminCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.restAdminCredentials"></a>

```go
func RestAdminCredentials() DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList">DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsHubDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetails">DataOciDatabaseMigrationMigrationsHubDetails</a>

---


### DataOciDatabaseMigrationMigrationsHubDetailsReplicatList <a name="DataOciDatabaseMigrationMigrationsHubDetailsReplicatList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsHubDetailsReplicatList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsHubDetailsReplicatList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference <a name="DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.performanceProfile">PerformanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicat">DataOciDatabaseMigrationMigrationsHubDetailsReplicat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PerformanceProfile`<sup>Required</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.performanceProfile"></a>

```go
func PerformanceProfile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicatOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsHubDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsReplicat">DataOciDatabaseMigrationMigrationsHubDetailsReplicat</a>

---


### DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList <a name="DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference <a name="DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials">DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials">DataOciDatabaseMigrationMigrationsHubDetailsRestAdminCredentials</a>

---


### DataOciDatabaseMigrationMigrationsIncludeObjectsList <a name="DataOciDatabaseMigrationMigrationsIncludeObjectsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsIncludeObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsIncludeObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference <a name="DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">IsOmitExcludedTableFromReplication</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjects">DataOciDatabaseMigrationMigrationsIncludeObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsOmitExcludedTableFromReplication`<sup>Required</sup> <a name="IsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```go
func IsOmitExcludedTableFromReplication() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsIncludeObjects
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsIncludeObjects">DataOciDatabaseMigrationMigrationsIncludeObjects</a>

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.estimate">Estimate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters">ExcludeParameters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree">ExportParallelismDegree</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree">ImportParallelismDegree</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster">IsCluster</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction">TableExistsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters">DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Estimate`<sup>Required</sup> <a name="Estimate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.estimate"></a>

```go
func Estimate() *string
```

- *Type:* *string

---

##### `ExcludeParameters`<sup>Required</sup> <a name="ExcludeParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters"></a>

```go
func ExcludeParameters() *[]*string
```

- *Type:* *[]*string

---

##### `ExportParallelismDegree`<sup>Required</sup> <a name="ExportParallelismDegree" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree"></a>

```go
func ExportParallelismDegree() *f64
```

- *Type:* *f64

---

##### `ImportParallelismDegree`<sup>Required</sup> <a name="ImportParallelismDegree" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree"></a>

```go
func ImportParallelismDegree() *f64
```

- *Type:* *f64

---

##### `IsCluster`<sup>Required</sup> <a name="IsCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster"></a>

```go
func IsCluster() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TableExistsAction`<sup>Required</sup> <a name="TableExistsAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction"></a>

```go
func TableExistsAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters">DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParameters</a>

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject">DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject">DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObject</a>

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject">DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject">DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObject</a>

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsList <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsInitialLoadSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsInitialLoadSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.newValue">NewValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue">OldValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps">DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NewValue`<sup>Required</sup> <a name="NewValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.newValue"></a>

```go
func NewValue() *string
```

- *Type:* *string

---

##### `OldValue`<sup>Required</sup> <a name="OldValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue"></a>

```go
func OldValue() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps">DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemaps</a>

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.compatibility">Compatibility</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.dataPumpParameters">DataPumpParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.exportDirectoryObject">ExportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.handleGrantErrors">HandleGrantErrors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.importDirectoryObject">ImportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.isConsistent">IsConsistent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects">IsIgnoreExistingObjects</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.isTzUtc">IsTzUtc</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.jobMode">JobMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.metadataRemaps">MetadataRemaps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.primaryKeyCompatibility">PrimaryKeyCompatibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.tablespaceDetails">TablespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettings">DataOciDatabaseMigrationMigrationsInitialLoadSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compatibility`<sup>Required</sup> <a name="Compatibility" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.compatibility"></a>

```go
func Compatibility() *[]*string
```

- *Type:* *[]*string

---

##### `DataPumpParameters`<sup>Required</sup> <a name="DataPumpParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.dataPumpParameters"></a>

```go
func DataPumpParameters() DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsDataPumpParametersList</a>

---

##### `ExportDirectoryObject`<sup>Required</sup> <a name="ExportDirectoryObject" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.exportDirectoryObject"></a>

```go
func ExportDirectoryObject() DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsExportDirectoryObjectList</a>

---

##### `HandleGrantErrors`<sup>Required</sup> <a name="HandleGrantErrors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.handleGrantErrors"></a>

```go
func HandleGrantErrors() *string
```

- *Type:* *string

---

##### `ImportDirectoryObject`<sup>Required</sup> <a name="ImportDirectoryObject" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.importDirectoryObject"></a>

```go
func ImportDirectoryObject() DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsImportDirectoryObjectList</a>

---

##### `IsConsistent`<sup>Required</sup> <a name="IsConsistent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.isConsistent"></a>

```go
func IsConsistent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsIgnoreExistingObjects`<sup>Required</sup> <a name="IsIgnoreExistingObjects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects"></a>

```go
func IsIgnoreExistingObjects() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsTzUtc`<sup>Required</sup> <a name="IsTzUtc" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.isTzUtc"></a>

```go
func IsTzUtc() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `JobMode`<sup>Required</sup> <a name="JobMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.jobMode"></a>

```go
func JobMode() *string
```

- *Type:* *string

---

##### `MetadataRemaps`<sup>Required</sup> <a name="MetadataRemaps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.metadataRemaps"></a>

```go
func MetadataRemaps() DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsMetadataRemapsList</a>

---

##### `PrimaryKeyCompatibility`<sup>Required</sup> <a name="PrimaryKeyCompatibility" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.primaryKeyCompatibility"></a>

```go
func PrimaryKeyCompatibility() *string
```

- *Type:* *string

---

##### `TablespaceDetails`<sup>Required</sup> <a name="TablespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.tablespaceDetails"></a>

```go
func TablespaceDetails() DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList">DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsInitialLoadSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettings">DataOciDatabaseMigrationMigrationsInitialLoadSettings</a>

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference <a name="DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrations"

dataocidatabasemigrationmigrations.NewDataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs">BlockSizeInKbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs">ExtendSizeInMbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate">IsAutoCreate</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile">IsBigFile</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget">RemapTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails">DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockSizeInKbs`<sup>Required</sup> <a name="BlockSizeInKbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs"></a>

```go
func BlockSizeInKbs() *string
```

- *Type:* *string

---

##### `ExtendSizeInMbs`<sup>Required</sup> <a name="ExtendSizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs"></a>

```go
func ExtendSizeInMbs() *f64
```

- *Type:* *f64

---

##### `IsAutoCreate`<sup>Required</sup> <a name="IsAutoCreate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate"></a>

```go
func IsAutoCreate() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsBigFile`<sup>Required</sup> <a name="IsBigFile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile"></a>

```go
func IsBigFile() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RemapTarget`<sup>Required</sup> <a name="RemapTarget" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget"></a>

```go
func RemapTarget() *string
```

- *Type:* *string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrations.DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails">DataOciDatabaseMigrationMigrationsInitialLoadSettingsTablespaceDetails</a>

---



