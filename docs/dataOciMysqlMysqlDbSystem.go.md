# `dataOciMysqlMysqlDbSystem` Submodule <a name="`dataOciMysqlMysqlDbSystem` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlDbSystem <a name="DataOciMysqlMysqlDbSystem" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_system oci_mysql_mysql_db_system}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystem(scope Construct, id *string, config DataOciMysqlMysqlDbSystemConfig) DataOciMysqlMysqlDbSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig">DataOciMysqlMysqlDbSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig">DataOciMysqlMysqlDbSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlDbSystem resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystem_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystem_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMysqlMysqlDbSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMysqlMysqlDbSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMysqlMysqlDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList">DataOciMysqlMysqlDbSystemBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.channels">Channels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList">DataOciMysqlMysqlDbSystemChannelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.configurationId">ConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.crashRecovery">CrashRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.currentPlacement">CurrentPlacement</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList">DataOciMysqlMysqlDbSystemCurrentPlacementList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.customerContacts">CustomerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList">DataOciMysqlMysqlDbSystemCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.databaseManagement">DatabaseManagement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.dataStorage">DataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList">DataOciMysqlMysqlDbSystemDataStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.deletionPolicy">DeletionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList">DataOciMysqlMysqlDbSystemDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.endpoints">Endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList">DataOciMysqlMysqlDbSystemEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.heatWaveCluster">HeatWaveCluster</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList">DataOciMysqlMysqlDbSystemHeatWaveClusterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.hostnameLabel">HostnameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.isHeatWaveClusterAttached">IsHeatWaveClusterAttached</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.isHighlyAvailable">IsHighlyAvailable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.maintenance">Maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList">DataOciMysqlMysqlDbSystemMaintenanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.mysqlVersion">MysqlVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.pointInTimeRecoveryDetails">PointInTimeRecoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList">DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.portX">PortX</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.secureConnections">SecureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList">DataOciMysqlMysqlDbSystemSecureConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.shapeName">ShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.shutdownType">ShutdownType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList">DataOciMysqlMysqlDbSystemSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.adminUsername"></a>

```go
func AdminUsername() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `BackupPolicy`<sup>Required</sup> <a name="BackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.backupPolicy"></a>

```go
func BackupPolicy() DataOciMysqlMysqlDbSystemBackupPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList">DataOciMysqlMysqlDbSystemBackupPolicyList</a>

---

##### `Channels`<sup>Required</sup> <a name="Channels" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.channels"></a>

```go
func Channels() DataOciMysqlMysqlDbSystemChannelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList">DataOciMysqlMysqlDbSystemChannelsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.configurationId"></a>

```go
func ConfigurationId() *string
```

- *Type:* *string

---

##### `CrashRecovery`<sup>Required</sup> <a name="CrashRecovery" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.crashRecovery"></a>

```go
func CrashRecovery() *string
```

- *Type:* *string

---

##### `CurrentPlacement`<sup>Required</sup> <a name="CurrentPlacement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.currentPlacement"></a>

```go
func CurrentPlacement() DataOciMysqlMysqlDbSystemCurrentPlacementList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList">DataOciMysqlMysqlDbSystemCurrentPlacementList</a>

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.customerContacts"></a>

```go
func CustomerContacts() DataOciMysqlMysqlDbSystemCustomerContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList">DataOciMysqlMysqlDbSystemCustomerContactsList</a>

---

##### `DatabaseManagement`<sup>Required</sup> <a name="DatabaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.databaseManagement"></a>

```go
func DatabaseManagement() *string
```

- *Type:* *string

---

##### `DataStorage`<sup>Required</sup> <a name="DataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.dataStorage"></a>

```go
func DataStorage() DataOciMysqlMysqlDbSystemDataStorageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList">DataOciMysqlMysqlDbSystemDataStorageList</a>

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.dataStorageSizeInGb"></a>

```go
func DataStorageSizeInGb() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.deletionPolicy"></a>

```go
func DeletionPolicy() DataOciMysqlMysqlDbSystemDeletionPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList">DataOciMysqlMysqlDbSystemDeletionPolicyList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.endpoints"></a>

```go
func Endpoints() DataOciMysqlMysqlDbSystemEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList">DataOciMysqlMysqlDbSystemEndpointsList</a>

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HeatWaveCluster`<sup>Required</sup> <a name="HeatWaveCluster" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.heatWaveCluster"></a>

```go
func HeatWaveCluster() DataOciMysqlMysqlDbSystemHeatWaveClusterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList">DataOciMysqlMysqlDbSystemHeatWaveClusterList</a>

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.hostnameLabel"></a>

```go
func HostnameLabel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IsHeatWaveClusterAttached`<sup>Required</sup> <a name="IsHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.isHeatWaveClusterAttached"></a>

```go
func IsHeatWaveClusterAttached() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHighlyAvailable`<sup>Required</sup> <a name="IsHighlyAvailable" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.isHighlyAvailable"></a>

```go
func IsHighlyAvailable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.maintenance"></a>

```go
func Maintenance() DataOciMysqlMysqlDbSystemMaintenanceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList">DataOciMysqlMysqlDbSystemMaintenanceList</a>

---

##### `MysqlVersion`<sup>Required</sup> <a name="MysqlVersion" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.mysqlVersion"></a>

```go
func MysqlVersion() *string
```

- *Type:* *string

---

##### `PointInTimeRecoveryDetails`<sup>Required</sup> <a name="PointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.pointInTimeRecoveryDetails"></a>

```go
func PointInTimeRecoveryDetails() DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList">DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortX`<sup>Required</sup> <a name="PortX" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.portX"></a>

```go
func PortX() *f64
```

- *Type:* *f64

---

##### `SecureConnections`<sup>Required</sup> <a name="SecureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.secureConnections"></a>

```go
func SecureConnections() DataOciMysqlMysqlDbSystemSecureConnectionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList">DataOciMysqlMysqlDbSystemSecureConnectionsList</a>

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.shapeName"></a>

```go
func ShapeName() *string
```

- *Type:* *string

---

##### `ShutdownType`<sup>Required</sup> <a name="ShutdownType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.shutdownType"></a>

```go
func ShutdownType() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.source"></a>

```go
func Source() DataOciMysqlMysqlDbSystemSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList">DataOciMysqlMysqlDbSystemSourceList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.dbSystemIdInput"></a>

```go
func DbSystemIdInput() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlDbSystemBackupPolicy <a name="DataOciMysqlMysqlDbSystemBackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemBackupPolicy {

}
```


### DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicy <a name="DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicy {

}
```


### DataOciMysqlMysqlDbSystemChannels <a name="DataOciMysqlMysqlDbSystemChannels" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannels.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemChannels {

}
```


### DataOciMysqlMysqlDbSystemChannelsSource <a name="DataOciMysqlMysqlDbSystemChannelsSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemChannelsSource {

}
```


### DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling <a name="DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling {

}
```


### DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificate <a name="DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificate.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificate {

}
```


### DataOciMysqlMysqlDbSystemChannelsTarget <a name="DataOciMysqlMysqlDbSystemChannelsTarget" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTarget.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemChannelsTarget {

}
```


### DataOciMysqlMysqlDbSystemChannelsTargetFilters <a name="DataOciMysqlMysqlDbSystemChannelsTargetFilters" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFilters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemChannelsTargetFilters {

}
```


### DataOciMysqlMysqlDbSystemConfig <a name="DataOciMysqlMysqlDbSystemConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DbSystemId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_system#db_system_id DataOciMysqlMysqlDbSystem#db_system_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemConfig.property.dbSystemId"></a>

```go
DbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_system#db_system_id DataOciMysqlMysqlDbSystem#db_system_id}.

---

### DataOciMysqlMysqlDbSystemCurrentPlacement <a name="DataOciMysqlMysqlDbSystemCurrentPlacement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacement"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemCurrentPlacement {

}
```


### DataOciMysqlMysqlDbSystemCustomerContacts <a name="DataOciMysqlMysqlDbSystemCustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContacts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemCustomerContacts {

}
```


### DataOciMysqlMysqlDbSystemDataStorage <a name="DataOciMysqlMysqlDbSystemDataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemDataStorage {

}
```


### DataOciMysqlMysqlDbSystemDeletionPolicy <a name="DataOciMysqlMysqlDbSystemDeletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemDeletionPolicy {

}
```


### DataOciMysqlMysqlDbSystemEndpoints <a name="DataOciMysqlMysqlDbSystemEndpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemEndpoints {

}
```


### DataOciMysqlMysqlDbSystemHeatWaveCluster <a name="DataOciMysqlMysqlDbSystemHeatWaveCluster" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveCluster"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveCluster.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemHeatWaveCluster {

}
```


### DataOciMysqlMysqlDbSystemMaintenance <a name="DataOciMysqlMysqlDbSystemMaintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemMaintenance {

}
```


### DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetails <a name="DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetails {

}
```


### DataOciMysqlMysqlDbSystemSecureConnections <a name="DataOciMysqlMysqlDbSystemSecureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnections.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemSecureConnections {

}
```


### DataOciMysqlMysqlDbSystemSource <a name="DataOciMysqlMysqlDbSystemSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

&dataocimysqlmysqldbsystem.DataOciMysqlMysqlDbSystemSource {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlDbSystemBackupPolicyList <a name="DataOciMysqlMysqlDbSystemBackupPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemBackupPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemBackupPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemBackupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemBackupPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemBackupPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemBackupPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicy">PitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList">DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicy">DataOciMysqlMysqlDbSystemBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PitrPolicy`<sup>Required</sup> <a name="PitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.pitrPolicy"></a>

```go
func PitrPolicy() DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList">DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList</a>

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.retentionInDays"></a>

```go
func RetentionInDays() *f64
```

- *Type:* *f64

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.windowStartTime"></a>

```go
func WindowStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemBackupPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicy">DataOciMysqlMysqlDbSystemBackupPolicy</a>

---


### DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList <a name="DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicy">DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicy">DataOciMysqlMysqlDbSystemBackupPolicyPitrPolicy</a>

---


### DataOciMysqlMysqlDbSystemChannelsList <a name="DataOciMysqlMysqlDbSystemChannelsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemChannelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemChannelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemChannelsOutputReference <a name="DataOciMysqlMysqlDbSystemChannelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemChannelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemChannelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList">DataOciMysqlMysqlDbSystemChannelsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList">DataOciMysqlMysqlDbSystemChannelsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannels">DataOciMysqlMysqlDbSystemChannels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.source"></a>

```go
func Source() DataOciMysqlMysqlDbSystemChannelsSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList">DataOciMysqlMysqlDbSystemChannelsSourceList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.target"></a>

```go
func Target() DataOciMysqlMysqlDbSystemChannelsTargetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList">DataOciMysqlMysqlDbSystemChannelsTargetList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemChannels
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannels">DataOciMysqlMysqlDbSystemChannels</a>

---


### DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList <a name="DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference <a name="DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename">LastConfiguredLogFilename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset">LastConfiguredLogOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling">DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastConfiguredLogFilename`<sup>Required</sup> <a name="LastConfiguredLogFilename" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename"></a>

```go
func LastConfiguredLogFilename() *string
```

- *Type:* *string

---

##### `LastConfiguredLogOffset`<sup>Required</sup> <a name="LastConfiguredLogOffset" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset"></a>

```go
func LastConfiguredLogOffset() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling">DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandling</a>

---


### DataOciMysqlMysqlDbSystemChannelsSourceList <a name="DataOciMysqlMysqlDbSystemChannelsSourceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemChannelsSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemChannelsSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemChannelsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemChannelsSourceOutputReference <a name="DataOciMysqlMysqlDbSystemChannelsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemChannelsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemChannelsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.anonymousTransactionsHandling">AnonymousTransactionsHandling</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList">DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.sslCaCertificate">SslCaCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList">DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSource">DataOciMysqlMysqlDbSystemChannelsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnonymousTransactionsHandling`<sup>Required</sup> <a name="AnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.anonymousTransactionsHandling"></a>

```go
func AnonymousTransactionsHandling() DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList">DataOciMysqlMysqlDbSystemChannelsSourceAnonymousTransactionsHandlingList</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `SslCaCertificate`<sup>Required</sup> <a name="SslCaCertificate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.sslCaCertificate"></a>

```go
func SslCaCertificate() DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList">DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList</a>

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemChannelsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSource">DataOciMysqlMysqlDbSystemChannelsSource</a>

---


### DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList <a name="DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference <a name="DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.certificateType">CertificateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.contents">Contents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificate">DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.certificateType"></a>

```go
func CertificateType() *string
```

- *Type:* *string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.contents"></a>

```go
func Contents() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificate">DataOciMysqlMysqlDbSystemChannelsSourceSslCaCertificate</a>

---


### DataOciMysqlMysqlDbSystemChannelsTargetFiltersList <a name="DataOciMysqlMysqlDbSystemChannelsTargetFiltersList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemChannelsTargetFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemChannelsTargetFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference <a name="DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFilters">DataOciMysqlMysqlDbSystemChannelsTargetFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemChannelsTargetFilters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFilters">DataOciMysqlMysqlDbSystemChannelsTargetFilters</a>

---


### DataOciMysqlMysqlDbSystemChannelsTargetList <a name="DataOciMysqlMysqlDbSystemChannelsTargetList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemChannelsTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemChannelsTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemChannelsTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemChannelsTargetOutputReference <a name="DataOciMysqlMysqlDbSystemChannelsTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemChannelsTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemChannelsTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.applierUsername">ApplierUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.delayInSeconds">DelayInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.filters">Filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList">DataOciMysqlMysqlDbSystemChannelsTargetFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling">TablesWithoutPrimaryKeyHandling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTarget">DataOciMysqlMysqlDbSystemChannelsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplierUsername`<sup>Required</sup> <a name="ApplierUsername" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.applierUsername"></a>

```go
func ApplierUsername() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `DelayInSeconds`<sup>Required</sup> <a name="DelayInSeconds" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.delayInSeconds"></a>

```go
func DelayInSeconds() *f64
```

- *Type:* *f64

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.filters"></a>

```go
func Filters() DataOciMysqlMysqlDbSystemChannelsTargetFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetFiltersList">DataOciMysqlMysqlDbSystemChannelsTargetFiltersList</a>

---

##### `TablesWithoutPrimaryKeyHandling`<sup>Required</sup> <a name="TablesWithoutPrimaryKeyHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling"></a>

```go
func TablesWithoutPrimaryKeyHandling() *string
```

- *Type:* *string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemChannelsTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemChannelsTarget">DataOciMysqlMysqlDbSystemChannelsTarget</a>

---


### DataOciMysqlMysqlDbSystemCurrentPlacementList <a name="DataOciMysqlMysqlDbSystemCurrentPlacementList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemCurrentPlacementList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemCurrentPlacementList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference <a name="DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemCurrentPlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacement">DataOciMysqlMysqlDbSystemCurrentPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemCurrentPlacement
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCurrentPlacement">DataOciMysqlMysqlDbSystemCurrentPlacement</a>

---


### DataOciMysqlMysqlDbSystemCustomerContactsList <a name="DataOciMysqlMysqlDbSystemCustomerContactsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemCustomerContactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemCustomerContactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemCustomerContactsOutputReference <a name="DataOciMysqlMysqlDbSystemCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemCustomerContactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemCustomerContactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContacts">DataOciMysqlMysqlDbSystemCustomerContacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemCustomerContacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemCustomerContacts">DataOciMysqlMysqlDbSystemCustomerContacts</a>

---


### DataOciMysqlMysqlDbSystemDataStorageList <a name="DataOciMysqlMysqlDbSystemDataStorageList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemDataStorageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemDataStorageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemDataStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemDataStorageOutputReference <a name="DataOciMysqlMysqlDbSystemDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemDataStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemDataStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.allocatedStorageSizeInGbs">AllocatedStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeLimitInGbs">DataStorageSizeLimitInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabled">IsAutoExpandStorageEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbs">MaxStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorage">DataOciMysqlMysqlDbSystemDataStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocatedStorageSizeInGbs`<sup>Required</sup> <a name="AllocatedStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```go
func AllocatedStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```go
func DataStorageSizeInGb() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeLimitInGbs`<sup>Required</sup> <a name="DataStorageSizeLimitInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```go
func DataStorageSizeLimitInGbs() *f64
```

- *Type:* *f64

---

##### `IsAutoExpandStorageEnabled`<sup>Required</sup> <a name="IsAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```go
func IsAutoExpandStorageEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxStorageSizeInGbs`<sup>Required</sup> <a name="MaxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```go
func MaxStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemDataStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDataStorage">DataOciMysqlMysqlDbSystemDataStorage</a>

---


### DataOciMysqlMysqlDbSystemDeletionPolicyList <a name="DataOciMysqlMysqlDbSystemDeletionPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemDeletionPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemDeletionPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemDeletionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetention">AutomaticBackupRetention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackup">FinalBackup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtected">IsDeleteProtected</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicy">DataOciMysqlMysqlDbSystemDeletionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticBackupRetention`<sup>Required</sup> <a name="AutomaticBackupRetention" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```go
func AutomaticBackupRetention() *string
```

- *Type:* *string

---

##### `FinalBackup`<sup>Required</sup> <a name="FinalBackup" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.property.finalBackup"></a>

```go
func FinalBackup() *string
```

- *Type:* *string

---

##### `IsDeleteProtected`<sup>Required</sup> <a name="IsDeleteProtected" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```go
func IsDeleteProtected() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemDeletionPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemDeletionPolicy">DataOciMysqlMysqlDbSystemDeletionPolicy</a>

---


### DataOciMysqlMysqlDbSystemEndpointsList <a name="DataOciMysqlMysqlDbSystemEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemEndpointsOutputReference <a name="DataOciMysqlMysqlDbSystemEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.modes">Modes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.portX">PortX</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.statusDetails">StatusDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpoints">DataOciMysqlMysqlDbSystemEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.modes"></a>

```go
func Modes() *[]*string
```

- *Type:* *[]*string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortX`<sup>Required</sup> <a name="PortX" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.portX"></a>

```go
func PortX() *f64
```

- *Type:* *f64

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.statusDetails"></a>

```go
func StatusDetails() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemEndpoints">DataOciMysqlMysqlDbSystemEndpoints</a>

---


### DataOciMysqlMysqlDbSystemHeatWaveClusterList <a name="DataOciMysqlMysqlDbSystemHeatWaveClusterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemHeatWaveClusterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemHeatWaveClusterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference <a name="DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.clusterSize">ClusterSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.isLakehouseEnabled">IsLakehouseEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.shapeName">ShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveCluster">DataOciMysqlMysqlDbSystemHeatWaveCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterSize`<sup>Required</sup> <a name="ClusterSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.clusterSize"></a>

```go
func ClusterSize() *f64
```

- *Type:* *f64

---

##### `IsLakehouseEnabled`<sup>Required</sup> <a name="IsLakehouseEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.isLakehouseEnabled"></a>

```go
func IsLakehouseEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.shapeName"></a>

```go
func ShapeName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemHeatWaveCluster
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemHeatWaveCluster">DataOciMysqlMysqlDbSystemHeatWaveCluster</a>

---


### DataOciMysqlMysqlDbSystemMaintenanceList <a name="DataOciMysqlMysqlDbSystemMaintenanceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemMaintenanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemMaintenanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemMaintenanceOutputReference <a name="DataOciMysqlMysqlDbSystemMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemMaintenanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemMaintenanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenance">DataOciMysqlMysqlDbSystemMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.property.windowStartTime"></a>

```go
func WindowStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemMaintenance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemMaintenance">DataOciMysqlMysqlDbSystemMaintenance</a>

---


### DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList <a name="DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference <a name="DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint">TimeEarliestRecoveryPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint">TimeLatestRecoveryPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetails">DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeEarliestRecoveryPoint`<sup>Required</sup> <a name="TimeEarliestRecoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint"></a>

```go
func TimeEarliestRecoveryPoint() *string
```

- *Type:* *string

---

##### `TimeLatestRecoveryPoint`<sup>Required</sup> <a name="TimeLatestRecoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint"></a>

```go
func TimeLatestRecoveryPoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetails">DataOciMysqlMysqlDbSystemPointInTimeRecoveryDetails</a>

---


### DataOciMysqlMysqlDbSystemSecureConnectionsList <a name="DataOciMysqlMysqlDbSystemSecureConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemSecureConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemSecureConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference <a name="DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemSecureConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationType">CertificateGenerationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnections">DataOciMysqlMysqlDbSystemSecureConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateGenerationType`<sup>Required</sup> <a name="CertificateGenerationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```go
func CertificateGenerationType() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemSecureConnections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSecureConnections">DataOciMysqlMysqlDbSystemSecureConnections</a>

---


### DataOciMysqlMysqlDbSystemSourceList <a name="DataOciMysqlMysqlDbSystemSourceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemSourceOutputReference <a name="DataOciMysqlMysqlDbSystemSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystem"

dataocimysqlmysqldbsystem.NewDataOciMysqlMysqlDbSystemSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.backupId">BackupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.recoveryPoint">RecoveryPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSource">DataOciMysqlMysqlDbSystemSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.backupId"></a>

```go
func BackupId() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `RecoveryPoint`<sup>Required</sup> <a name="RecoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.recoveryPoint"></a>

```go
func RecoveryPoint() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.sourceUrl"></a>

```go
func SourceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystem.DataOciMysqlMysqlDbSystemSource">DataOciMysqlMysqlDbSystemSource</a>

---



