# `dataOciDataSafeTargetDatabase` Submodule <a name="`dataOciDataSafeTargetDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetDatabase <a name="DataOciDataSafeTargetDatabase" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database oci_data_safe_target_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabase(scope Construct, id *string, config DataOciDataSafeTargetDatabaseConfig) DataOciDataSafeTargetDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig">DataOciDataSafeTargetDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig">DataOciDataSafeTargetDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabase_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeTargetDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeTargetDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeTargetDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.associatedResourceIds">AssociatedResourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.connectionOption">ConnectionOption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList">DataOciDataSafeTargetDatabaseConnectionOptionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList">DataOciDataSafeTargetDatabaseCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.databaseDetails">DatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList">DataOciDataSafeTargetDatabaseDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.peerTargetDatabaseDetails">PeerTargetDatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.peerTargetDatabases">PeerTargetDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList">DataOciDataSafeTargetDatabasePeerTargetDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.tlsConfig">TlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList">DataOciDataSafeTargetDatabaseTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.targetDatabaseIdInput">TargetDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.targetDatabaseId">TargetDatabaseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AssociatedResourceIds`<sup>Required</sup> <a name="AssociatedResourceIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.associatedResourceIds"></a>

```go
func AssociatedResourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionOption`<sup>Required</sup> <a name="ConnectionOption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.connectionOption"></a>

```go
func ConnectionOption() DataOciDataSafeTargetDatabaseConnectionOptionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList">DataOciDataSafeTargetDatabaseConnectionOptionList</a>

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.credentials"></a>

```go
func Credentials() DataOciDataSafeTargetDatabaseCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList">DataOciDataSafeTargetDatabaseCredentialsList</a>

---

##### `DatabaseDetails`<sup>Required</sup> <a name="DatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.databaseDetails"></a>

```go
func DatabaseDetails() DataOciDataSafeTargetDatabaseDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList">DataOciDataSafeTargetDatabaseDatabaseDetailsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `PeerTargetDatabaseDetails`<sup>Required</sup> <a name="PeerTargetDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.peerTargetDatabaseDetails"></a>

```go
func PeerTargetDatabaseDetails() DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList</a>

---

##### `PeerTargetDatabases`<sup>Required</sup> <a name="PeerTargetDatabases" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.peerTargetDatabases"></a>

```go
func PeerTargetDatabases() DataOciDataSafeTargetDatabasePeerTargetDatabasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList">DataOciDataSafeTargetDatabasePeerTargetDatabasesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.tlsConfig"></a>

```go
func TlsConfig() DataOciDataSafeTargetDatabaseTlsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList">DataOciDataSafeTargetDatabaseTlsConfigList</a>

---

##### `TargetDatabaseIdInput`<sup>Optional</sup> <a name="TargetDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.targetDatabaseIdInput"></a>

```go
func TargetDatabaseIdInput() *string
```

- *Type:* *string

---

##### `TargetDatabaseId`<sup>Required</sup> <a name="TargetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.targetDatabaseId"></a>

```go
func TargetDatabaseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetDatabaseConfig <a name="DataOciDataSafeTargetDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

&dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	TargetDatabaseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.targetDatabaseId">TargetDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database#target_database_id DataOciDataSafeTargetDatabase#target_database_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TargetDatabaseId`<sup>Required</sup> <a name="TargetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConfig.property.targetDatabaseId"></a>

```go
TargetDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database#target_database_id DataOciDataSafeTargetDatabase#target_database_id}.

---

### DataOciDataSafeTargetDatabaseConnectionOption <a name="DataOciDataSafeTargetDatabaseConnectionOption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOption"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOption.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

&dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabaseConnectionOption {

}
```


### DataOciDataSafeTargetDatabaseCredentials <a name="DataOciDataSafeTargetDatabaseCredentials" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

&dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabaseCredentials {

}
```


### DataOciDataSafeTargetDatabaseDatabaseDetails <a name="DataOciDataSafeTargetDatabaseDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

&dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabaseDatabaseDetails {

}
```


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

&dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails {

}
```


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

&dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails {

}
```


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

&dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig {

}
```


### DataOciDataSafeTargetDatabasePeerTargetDatabases <a name="DataOciDataSafeTargetDatabasePeerTargetDatabases" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabases.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

&dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabasePeerTargetDatabases {

}
```


### DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

&dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails {

}
```


### DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

&dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig {

}
```


### DataOciDataSafeTargetDatabaseTlsConfig <a name="DataOciDataSafeTargetDatabaseTlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

&dataocidatasafetargetdatabase.DataOciDataSafeTargetDatabaseTlsConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetDatabaseConnectionOptionList <a name="DataOciDataSafeTargetDatabaseConnectionOptionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabaseConnectionOptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeTargetDatabaseConnectionOptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeTargetDatabaseConnectionOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeTargetDatabaseConnectionOptionOutputReference <a name="DataOciDataSafeTargetDatabaseConnectionOptionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabaseConnectionOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeTargetDatabaseConnectionOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.datasafePrivateEndpointId">DatasafePrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.onPremConnectorId">OnPremConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOption">DataOciDataSafeTargetDatabaseConnectionOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `DatasafePrivateEndpointId`<sup>Required</sup> <a name="DatasafePrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.datasafePrivateEndpointId"></a>

```go
func DatasafePrivateEndpointId() *string
```

- *Type:* *string

---

##### `OnPremConnectorId`<sup>Required</sup> <a name="OnPremConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.onPremConnectorId"></a>

```go
func OnPremConnectorId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeTargetDatabaseConnectionOption
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseConnectionOption">DataOciDataSafeTargetDatabaseConnectionOption</a>

---


### DataOciDataSafeTargetDatabaseCredentialsList <a name="DataOciDataSafeTargetDatabaseCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabaseCredentialsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeTargetDatabaseCredentialsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeTargetDatabaseCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeTargetDatabaseCredentialsOutputReference <a name="DataOciDataSafeTargetDatabaseCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabaseCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeTargetDatabaseCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentials">DataOciDataSafeTargetDatabaseCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeTargetDatabaseCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseCredentials">DataOciDataSafeTargetDatabaseCredentials</a>

---


### DataOciDataSafeTargetDatabaseDatabaseDetailsList <a name="DataOciDataSafeTargetDatabaseDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabaseDatabaseDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeTargetDatabaseDatabaseDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureType">InfrastructureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterId">VmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetails">DataOciDataSafeTargetDatabaseDatabaseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureType"></a>

```go
func InfrastructureType() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.listenerPort"></a>

```go
func ListenerPort() *f64
```

- *Type:* *f64

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterId"></a>

```go
func VmClusterId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeTargetDatabaseDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseDatabaseDetails">DataOciDataSafeTargetDatabaseDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.infrastructureType">InfrastructureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.vmClusterId">VmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.infrastructureType"></a>

```go
func InfrastructureType() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.listenerPort"></a>

```go
func ListenerPort() *f64
```

- *Type:* *f64

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.vmClusterId"></a>

```go
func VmClusterId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.databaseDetails">DatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.dataguardAssociationId">DataguardAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseDetails`<sup>Required</sup> <a name="DatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.databaseDetails"></a>

```go
func DatabaseDetails() DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsList</a>

---

##### `DataguardAssociationId`<sup>Required</sup> <a name="DataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.dataguardAssociationId"></a>

```go
func DataguardAssociationId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.tlsConfig"></a>

```go
func TlsConfig() DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.get"></a>

```go
func Get(index *f64) DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.certificateStoreType">CertificateStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.keyStoreContent">KeyStoreContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.storePassword">StorePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.trustStoreContent">TrustStoreContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateStoreType`<sup>Required</sup> <a name="CertificateStoreType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.certificateStoreType"></a>

```go
func CertificateStoreType() *string
```

- *Type:* *string

---

##### `KeyStoreContent`<sup>Required</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.keyStoreContent"></a>

```go
func KeyStoreContent() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorePassword`<sup>Required</sup> <a name="StorePassword" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.storePassword"></a>

```go
func StorePassword() *string
```

- *Type:* *string

---

##### `TrustStoreContent`<sup>Required</sup> <a name="TrustStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.trustStoreContent"></a>

```go
func TrustStoreContent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.infrastructureType">InfrastructureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.vmClusterId">VmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.infrastructureType"></a>

```go
func InfrastructureType() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.listenerPort"></a>

```go
func ListenerPort() *f64
```

- *Type:* *f64

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.vmClusterId"></a>

```go
func VmClusterId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.get"></a>

```go
func Get(index *f64) DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseDetails">DatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseUniqueName">DatabaseUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.dataguardAssociationId">DataguardAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.key">Key</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabases">DataOciDataSafeTargetDatabasePeerTargetDatabases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseDetails`<sup>Required</sup> <a name="DatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseDetails"></a>

```go
func DatabaseDetails() DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList</a>

---

##### `DatabaseUniqueName`<sup>Required</sup> <a name="DatabaseUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseUniqueName"></a>

```go
func DatabaseUniqueName() *string
```

- *Type:* *string

---

##### `DataguardAssociationId`<sup>Required</sup> <a name="DataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.dataguardAssociationId"></a>

```go
func DataguardAssociationId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.key"></a>

```go
func Key() *f64
```

- *Type:* *f64

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.tlsConfig"></a>

```go
func TlsConfig() DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeTargetDatabasePeerTargetDatabases
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabases">DataOciDataSafeTargetDatabasePeerTargetDatabases</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.get"></a>

```go
func Get(index *f64) DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.certificateStoreType">CertificateStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.keyStoreContent">KeyStoreContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.storePassword">StorePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.trustStoreContent">TrustStoreContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateStoreType`<sup>Required</sup> <a name="CertificateStoreType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.certificateStoreType"></a>

```go
func CertificateStoreType() *string
```

- *Type:* *string

---

##### `KeyStoreContent`<sup>Required</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.keyStoreContent"></a>

```go
func KeyStoreContent() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorePassword`<sup>Required</sup> <a name="StorePassword" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.storePassword"></a>

```go
func StorePassword() *string
```

- *Type:* *string

---

##### `TrustStoreContent`<sup>Required</sup> <a name="TrustStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.trustStoreContent"></a>

```go
func TrustStoreContent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabasesTlsConfig</a>

---


### DataOciDataSafeTargetDatabaseTlsConfigList <a name="DataOciDataSafeTargetDatabaseTlsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabaseTlsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeTargetDatabaseTlsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.get"></a>

```go
func Get(index *f64) DataOciDataSafeTargetDatabaseTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeTargetDatabaseTlsConfigOutputReference <a name="DataOciDataSafeTargetDatabaseTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabase"

dataocidatasafetargetdatabase.NewDataOciDataSafeTargetDatabaseTlsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeTargetDatabaseTlsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.certificateStoreType">CertificateStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.keyStoreContent">KeyStoreContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.storePassword">StorePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.trustStoreContent">TrustStoreContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfig">DataOciDataSafeTargetDatabaseTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateStoreType`<sup>Required</sup> <a name="CertificateStoreType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.certificateStoreType"></a>

```go
func CertificateStoreType() *string
```

- *Type:* *string

---

##### `KeyStoreContent`<sup>Required</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.keyStoreContent"></a>

```go
func KeyStoreContent() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorePassword`<sup>Required</sup> <a name="StorePassword" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.storePassword"></a>

```go
func StorePassword() *string
```

- *Type:* *string

---

##### `TrustStoreContent`<sup>Required</sup> <a name="TrustStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.trustStoreContent"></a>

```go
func TrustStoreContent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeTargetDatabaseTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabase.DataOciDataSafeTargetDatabaseTlsConfig">DataOciDataSafeTargetDatabaseTlsConfig</a>

---



