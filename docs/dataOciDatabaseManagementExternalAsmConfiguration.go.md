# `dataOciDatabaseManagementExternalAsmConfiguration` Submodule <a name="`dataOciDatabaseManagementExternalAsmConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalAsmConfiguration <a name="DataOciDatabaseManagementExternalAsmConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration oci_database_management_external_asm_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmconfiguration"

dataocidatabasemanagementexternalasmconfiguration.NewDataOciDatabaseManagementExternalAsmConfiguration(scope Construct, id *string, config DataOciDatabaseManagementExternalAsmConfigurationConfig) DataOciDatabaseManagementExternalAsmConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig">DataOciDatabaseManagementExternalAsmConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig">DataOciDatabaseManagementExternalAsmConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.resetOpcNamedCredentialId"></a>

```go
func ResetOpcNamedCredentialId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmconfiguration"

dataocidatabasemanagementexternalasmconfiguration.DataOciDatabaseManagementExternalAsmConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmconfiguration"

dataocidatabasemanagementexternalasmconfiguration.DataOciDatabaseManagementExternalAsmConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmconfiguration"

dataocidatabasemanagementexternalasmconfiguration.DataOciDatabaseManagementExternalAsmConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmconfiguration"

dataocidatabasemanagementexternalasmconfiguration.DataOciDatabaseManagementExternalAsmConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementExternalAsmConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementExternalAsmConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalAsmConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.initParameters">InitParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList">DataOciDatabaseManagementExternalAsmConfigurationInitParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.externalAsmIdInput">ExternalAsmIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.externalAsmId">ExternalAsmId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InitParameters`<sup>Required</sup> <a name="InitParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.initParameters"></a>

```go
func InitParameters() DataOciDatabaseManagementExternalAsmConfigurationInitParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList">DataOciDatabaseManagementExternalAsmConfigurationInitParametersList</a>

---

##### `ExternalAsmIdInput`<sup>Optional</sup> <a name="ExternalAsmIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.externalAsmIdInput"></a>

```go
func ExternalAsmIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.opcNamedCredentialIdInput"></a>

```go
func OpcNamedCredentialIdInput() *string
```

- *Type:* *string

---

##### `ExternalAsmId`<sup>Required</sup> <a name="ExternalAsmId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.externalAsmId"></a>

```go
func ExternalAsmId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.opcNamedCredentialId"></a>

```go
func OpcNamedCredentialId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalAsmConfigurationConfig <a name="DataOciDatabaseManagementExternalAsmConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmconfiguration"

&dataocidatabasemanagementexternalasmconfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExternalAsmId: *string,
	Id: *string,
	OpcNamedCredentialId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.externalAsmId">ExternalAsmId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#external_asm_id DataOciDatabaseManagementExternalAsmConfiguration#external_asm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#id DataOciDatabaseManagementExternalAsmConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#opc_named_credential_id DataOciDatabaseManagementExternalAsmConfiguration#opc_named_credential_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalAsmId`<sup>Required</sup> <a name="ExternalAsmId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.externalAsmId"></a>

```go
ExternalAsmId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#external_asm_id DataOciDatabaseManagementExternalAsmConfiguration#external_asm_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#id DataOciDatabaseManagementExternalAsmConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationConfig.property.opcNamedCredentialId"></a>

```go
OpcNamedCredentialId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_configuration#opc_named_credential_id DataOciDatabaseManagementExternalAsmConfiguration#opc_named_credential_id}.

---

### DataOciDatabaseManagementExternalAsmConfigurationInitParameters <a name="DataOciDatabaseManagementExternalAsmConfigurationInitParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmconfiguration"

&dataocidatabasemanagementexternalasmconfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParameters {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalAsmConfigurationInitParametersList <a name="DataOciDatabaseManagementExternalAsmConfigurationInitParametersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmconfiguration"

dataocidatabasemanagementexternalasmconfiguration.NewDataOciDatabaseManagementExternalAsmConfigurationInitParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalAsmConfigurationInitParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference <a name="DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmconfiguration"

dataocidatabasemanagementexternalasmconfiguration.NewDataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.asmInstanceDisplayName">AsmInstanceDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.asmInstanceId">AsmInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.autoMountDiskGroups">AutoMountDiskGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.diskDiscoveryPath">DiskDiscoveryPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.preferredReadFailureGroups">PreferredReadFailureGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.rebalancePower">RebalancePower</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParameters">DataOciDatabaseManagementExternalAsmConfigurationInitParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AsmInstanceDisplayName`<sup>Required</sup> <a name="AsmInstanceDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.asmInstanceDisplayName"></a>

```go
func AsmInstanceDisplayName() *string
```

- *Type:* *string

---

##### `AsmInstanceId`<sup>Required</sup> <a name="AsmInstanceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.asmInstanceId"></a>

```go
func AsmInstanceId() *string
```

- *Type:* *string

---

##### `AutoMountDiskGroups`<sup>Required</sup> <a name="AutoMountDiskGroups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.autoMountDiskGroups"></a>

```go
func AutoMountDiskGroups() *[]*string
```

- *Type:* *[]*string

---

##### `DiskDiscoveryPath`<sup>Required</sup> <a name="DiskDiscoveryPath" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.diskDiscoveryPath"></a>

```go
func DiskDiscoveryPath() *string
```

- *Type:* *string

---

##### `PreferredReadFailureGroups`<sup>Required</sup> <a name="PreferredReadFailureGroups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.preferredReadFailureGroups"></a>

```go
func PreferredReadFailureGroups() *[]*string
```

- *Type:* *[]*string

---

##### `RebalancePower`<sup>Required</sup> <a name="RebalancePower" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.rebalancePower"></a>

```go
func RebalancePower() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalAsmConfigurationInitParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmConfiguration.DataOciDatabaseManagementExternalAsmConfigurationInitParameters">DataOciDatabaseManagementExternalAsmConfigurationInitParameters</a>

---



