# `dataOciRecoveryProtectedDatabaseFetchConfiguration` Submodule <a name="`dataOciRecoveryProtectedDatabaseFetchConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciRecoveryProtectedDatabaseFetchConfiguration <a name="DataOciRecoveryProtectedDatabaseFetchConfiguration" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration oci_recovery_protected_database_fetch_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabasefetchconfiguration"

dataocirecoveryprotecteddatabasefetchconfiguration.NewDataOciRecoveryProtectedDatabaseFetchConfiguration(scope Construct, id *string, config DataOciRecoveryProtectedDatabaseFetchConfigurationConfig) DataOciRecoveryProtectedDatabaseFetchConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig">DataOciRecoveryProtectedDatabaseFetchConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig">DataOciRecoveryProtectedDatabaseFetchConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetBase64EncodeContent">ResetBase64EncodeContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetConfigurationType">ResetConfigurationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBase64EncodeContent` <a name="ResetBase64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetBase64EncodeContent"></a>

```go
func ResetBase64EncodeContent()
```

##### `ResetConfigurationType` <a name="ResetConfigurationType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetConfigurationType"></a>

```go
func ResetConfigurationType()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciRecoveryProtectedDatabaseFetchConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabasefetchconfiguration"

dataocirecoveryprotecteddatabasefetchconfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabasefetchconfiguration"

dataocirecoveryprotecteddatabasefetchconfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabasefetchconfiguration"

dataocirecoveryprotecteddatabasefetchconfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabasefetchconfiguration"

dataocirecoveryprotecteddatabasefetchconfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciRecoveryProtectedDatabaseFetchConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciRecoveryProtectedDatabaseFetchConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciRecoveryProtectedDatabaseFetchConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciRecoveryProtectedDatabaseFetchConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.base64EncodeContentInput">Base64EncodeContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.configurationTypeInput">ConfigurationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.protectedDatabaseIdInput">ProtectedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.configurationType">ConfigurationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.protectedDatabaseId">ProtectedDatabaseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Base64EncodeContentInput`<sup>Optional</sup> <a name="Base64EncodeContentInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.base64EncodeContentInput"></a>

```go
func Base64EncodeContentInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationTypeInput`<sup>Optional</sup> <a name="ConfigurationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.configurationTypeInput"></a>

```go
func ConfigurationTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProtectedDatabaseIdInput`<sup>Optional</sup> <a name="ProtectedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.protectedDatabaseIdInput"></a>

```go
func ProtectedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `Base64EncodeContent`<sup>Required</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.base64EncodeContent"></a>

```go
func Base64EncodeContent() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationType`<sup>Required</sup> <a name="ConfigurationType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.configurationType"></a>

```go
func ConfigurationType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProtectedDatabaseId`<sup>Required</sup> <a name="ProtectedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.protectedDatabaseId"></a>

```go
func ProtectedDatabaseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciRecoveryProtectedDatabaseFetchConfigurationConfig <a name="DataOciRecoveryProtectedDatabaseFetchConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryprotecteddatabasefetchconfiguration"

&dataocirecoveryprotecteddatabasefetchconfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProtectedDatabaseId: *string,
	Base64EncodeContent: interface{},
	ConfigurationType: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.protectedDatabaseId">ProtectedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#protected_database_id DataOciRecoveryProtectedDatabaseFetchConfiguration#protected_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#base64_encode_content DataOciRecoveryProtectedDatabaseFetchConfiguration#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.configurationType">ConfigurationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#configuration_type DataOciRecoveryProtectedDatabaseFetchConfiguration#configuration_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#id DataOciRecoveryProtectedDatabaseFetchConfiguration#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProtectedDatabaseId`<sup>Required</sup> <a name="ProtectedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.protectedDatabaseId"></a>

```go
ProtectedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#protected_database_id DataOciRecoveryProtectedDatabaseFetchConfiguration#protected_database_id}.

---

##### `Base64EncodeContent`<sup>Optional</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.base64EncodeContent"></a>

```go
Base64EncodeContent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#base64_encode_content DataOciRecoveryProtectedDatabaseFetchConfiguration#base64_encode_content}.

---

##### `ConfigurationType`<sup>Optional</sup> <a name="ConfigurationType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.configurationType"></a>

```go
ConfigurationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#configuration_type DataOciRecoveryProtectedDatabaseFetchConfiguration#configuration_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryProtectedDatabaseFetchConfiguration.DataOciRecoveryProtectedDatabaseFetchConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_protected_database_fetch_configuration#id DataOciRecoveryProtectedDatabaseFetchConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



