# `dataOciMysqlMysqlConfigurations` Submodule <a name="`dataOciMysqlMysqlConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlConfigurations <a name="DataOciMysqlMysqlConfigurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations oci_mysql_mysql_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

dataocimysqlmysqlconfigurations.NewDataOciMysqlMysqlConfigurations(scope Construct, id *string, config DataOciMysqlMysqlConfigurationsConfig) DataOciMysqlMysqlConfigurations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig">DataOciMysqlMysqlConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig">DataOciMysqlMysqlConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetConfigurationId">ResetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetShapeName">ResetShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfigurationId` <a name="ResetConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetConfigurationId"></a>

```go
func ResetConfigurationId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetId"></a>

```go
func ResetId()
```

##### `ResetShapeName` <a name="ResetShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetShapeName"></a>

```go
func ResetShapeName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetState"></a>

```go
func ResetState()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

dataocimysqlmysqlconfigurations.DataOciMysqlMysqlConfigurations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

dataocimysqlmysqlconfigurations.DataOciMysqlMysqlConfigurations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

dataocimysqlmysqlconfigurations.DataOciMysqlMysqlConfigurations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

dataocimysqlmysqlconfigurations.DataOciMysqlMysqlConfigurations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMysqlMysqlConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMysqlMysqlConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMysqlMysqlConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList">DataOciMysqlMysqlConfigurationsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList">DataOciMysqlMysqlConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeNameInput">ShapeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.typeInput">TypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationId">ConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeName">ShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.type">Type</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurations"></a>

```go
func Configurations() DataOciMysqlMysqlConfigurationsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList">DataOciMysqlMysqlConfigurationsConfigurationsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filter"></a>

```go
func Filter() DataOciMysqlMysqlConfigurationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList">DataOciMysqlMysqlConfigurationsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationIdInput"></a>

```go
func ConfigurationIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ShapeNameInput`<sup>Optional</sup> <a name="ShapeNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeNameInput"></a>

```go
func ShapeNameInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.typeInput"></a>

```go
func TypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationId"></a>

```go
func ConfigurationId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeName"></a>

```go
func ShapeName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.type"></a>

```go
func Type() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlConfigurationsConfig <a name="DataOciMysqlMysqlConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

&dataocimysqlmysqlconfigurations.DataOciMysqlMysqlConfigurationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ConfigurationId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	ShapeName: *string,
	State: *string,
	Type: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#compartment_id DataOciMysqlMysqlConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.configurationId">ConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#configuration_id DataOciMysqlMysqlConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#display_name DataOciMysqlMysqlConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#id DataOciMysqlMysqlConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.shapeName">ShapeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#shape_name DataOciMysqlMysqlConfigurations#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#state DataOciMysqlMysqlConfigurations#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.type">Type</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#type DataOciMysqlMysqlConfigurations#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#compartment_id DataOciMysqlMysqlConfigurations#compartment_id}.

---

##### `ConfigurationId`<sup>Optional</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.configurationId"></a>

```go
ConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#configuration_id DataOciMysqlMysqlConfigurations#configuration_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#display_name DataOciMysqlMysqlConfigurations#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#filter DataOciMysqlMysqlConfigurations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#id DataOciMysqlMysqlConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ShapeName`<sup>Optional</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.shapeName"></a>

```go
ShapeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#shape_name DataOciMysqlMysqlConfigurations#shape_name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#state DataOciMysqlMysqlConfigurations#state}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.type"></a>

```go
Type *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#type DataOciMysqlMysqlConfigurations#type}.

---

### DataOciMysqlMysqlConfigurationsConfigurations <a name="DataOciMysqlMysqlConfigurationsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

&dataocimysqlmysqlconfigurations.DataOciMysqlMysqlConfigurationsConfigurations {

}
```


### DataOciMysqlMysqlConfigurationsConfigurationsInitVariables <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

&dataocimysqlmysqlconfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables {

}
```


### DataOciMysqlMysqlConfigurationsConfigurationsVariables <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

&dataocimysqlmysqlconfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables {

}
```


### DataOciMysqlMysqlConfigurationsFilter <a name="DataOciMysqlMysqlConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

&dataocimysqlmysqlconfigurations.DataOciMysqlMysqlConfigurationsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#name DataOciMysqlMysqlConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#values DataOciMysqlMysqlConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#regex DataOciMysqlMysqlConfigurations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#name DataOciMysqlMysqlConfigurations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#values DataOciMysqlMysqlConfigurations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#regex DataOciMysqlMysqlConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

dataocimysqlmysqlconfigurations.NewDataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

dataocimysqlmysqlconfigurations.NewDataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.lowerCaseTableNames">LowerCaseTableNames</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables">DataOciMysqlMysqlConfigurationsConfigurationsInitVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LowerCaseTableNames`<sup>Required</sup> <a name="LowerCaseTableNames" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.lowerCaseTableNames"></a>

```go
func LowerCaseTableNames() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlConfigurationsConfigurationsInitVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables">DataOciMysqlMysqlConfigurationsConfigurationsInitVariables</a>

---


### DataOciMysqlMysqlConfigurationsConfigurationsList <a name="DataOciMysqlMysqlConfigurationsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

dataocimysqlmysqlconfigurations.NewDataOciMysqlMysqlConfigurationsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlConfigurationsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlConfigurationsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlConfigurationsConfigurationsOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

dataocimysqlmysqlconfigurations.NewDataOciMysqlMysqlConfigurationsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlConfigurationsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.initVariables">InitVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.parentConfigurationId">ParentConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.shapeName">ShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.variables">Variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations">DataOciMysqlMysqlConfigurationsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitVariables`<sup>Required</sup> <a name="InitVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.initVariables"></a>

```go
func InitVariables() DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList</a>

---

##### `ParentConfigurationId`<sup>Required</sup> <a name="ParentConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.parentConfigurationId"></a>

```go
func ParentConfigurationId() *string
```

- *Type:* *string

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.shapeName"></a>

```go
func ShapeName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.variables"></a>

```go
func Variables() DataOciMysqlMysqlConfigurationsConfigurationsVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlConfigurationsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations">DataOciMysqlMysqlConfigurationsConfigurations</a>

---


### DataOciMysqlMysqlConfigurationsConfigurationsVariablesList <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

dataocimysqlmysqlconfigurations.NewDataOciMysqlMysqlConfigurationsConfigurationsVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlConfigurationsConfigurationsVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

dataocimysqlmysqlconfigurations.NewDataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.autocommit">Autocommit</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.bigTables">BigTables</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogExpireLogsSeconds">BinlogExpireLogsSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowMetadata">BinlogRowMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowValueOptions">BinlogRowValueOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogTransactionCompression">BinlogTransactionCompression</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.completionType">CompletionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryChunkSize">ConnectionMemoryChunkSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryLimit">ConnectionMemoryLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.cteMaxRecursionDepth">CteMaxRecursionDepth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.defaultAuthenticationPlugin">DefaultAuthenticationPlugin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.foreignKeyChecks">ForeignKeyChecks</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.generatedRandomPasswordLength">GeneratedRandomPasswordLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryLimit">GlobalConnectionMemoryLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryTracking">GlobalConnectionMemoryTracking</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.groupReplicationConsistency">GroupReplicationConsistency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.informationSchemaStatsExpiry">InformationSchemaStatsExpiry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolDumpPct">InnodbBufferPoolDumpPct</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolInstances">InnodbBufferPoolInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolSize">InnodbBufferPoolSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlBufferSize">InnodbDdlBufferSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlThreads">InnodbDdlThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtEnableStopword">InnodbFtEnableStopword</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMaxTokenSize">InnodbFtMaxTokenSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMinTokenSize">InnodbFtMinTokenSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtNumWordOptimize">InnodbFtNumWordOptimize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtResultCacheLimit">InnodbFtResultCacheLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtServerStopwordTable">InnodbFtServerStopwordTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLockWaitTimeout">InnodbLockWaitTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLogWriterThreads">InnodbLogWriterThreads</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLag">InnodbMaxPurgeLag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLagDelay">InnodbMaxPurgeLagDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsPersistentSamplePages">InnodbStatsPersistentSamplePages</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsTransientSamplePages">InnodbStatsTransientSamplePages</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.interactiveTimeout">InteractiveTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.localInfile">LocalInfile</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mandatoryRoles">MandatoryRoles</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxAllowedPacket">MaxAllowedPacket</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxBinlogCacheSize">MaxBinlogCacheSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnectErrors">MaxConnectErrors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxExecutionTime">MaxExecutionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxHeapTableSize">MaxHeapTableSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxPreparedStmtCount">MaxPreparedStmtCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlFirewallMode">MysqlFirewallMode</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxConnectTimeout">MysqlxConnectTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel">MysqlxDeflateDefaultCompressionLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel">MysqlxDeflateMaxClientCompressionLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix">MysqlxDocumentIdUniquePrefix</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxEnableHelloNotice">MysqlxEnableHelloNotice</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout">MysqlxIdleWorkerThreadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxInteractiveTimeout">MysqlxInteractiveTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel">MysqlxLz4DefaultCompressionLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel">MysqlxLz4MaxClientCompressionLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMaxAllowedPacket">MysqlxMaxAllowedPacket</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMinWorkerThreads">MysqlxMinWorkerThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxReadTimeout">MysqlxReadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWaitTimeout">MysqlxWaitTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWriteTimeout">MysqlxWriteTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel">MysqlxZstdDefaultCompressionLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel">MysqlxZstdMaxClientCompressionLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel">MysqlZstdDefaultCompressionLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netReadTimeout">NetReadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netWriteTimeout">NetWriteTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.parserMaxMemSize">ParserMaxMemSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryAllocBlockSize">QueryAllocBlockSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryPreallocSize">QueryPreallocSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.regexpTimeLimit">RegexpTimeLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sortBufferSize">SortBufferSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlMode">SqlMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlRequirePrimaryKey">SqlRequirePrimaryKey</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlWarnings">SqlWarnings</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolDedicatedListeners">ThreadPoolDedicatedListeners</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolMaxTransactionsLimit">ThreadPoolMaxTransactionsLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.tmpTableSize">TmpTableSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.transactionIsolation">TransactionIsolation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.waitTimeout">WaitTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables">DataOciMysqlMysqlConfigurationsConfigurationsVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Autocommit`<sup>Required</sup> <a name="Autocommit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.autocommit"></a>

```go
func Autocommit() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BigTables`<sup>Required</sup> <a name="BigTables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.bigTables"></a>

```go
func BigTables() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BinlogExpireLogsSeconds`<sup>Required</sup> <a name="BinlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogExpireLogsSeconds"></a>

```go
func BinlogExpireLogsSeconds() *f64
```

- *Type:* *f64

---

##### `BinlogRowMetadata`<sup>Required</sup> <a name="BinlogRowMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowMetadata"></a>

```go
func BinlogRowMetadata() *string
```

- *Type:* *string

---

##### `BinlogRowValueOptions`<sup>Required</sup> <a name="BinlogRowValueOptions" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowValueOptions"></a>

```go
func BinlogRowValueOptions() *string
```

- *Type:* *string

---

##### `BinlogTransactionCompression`<sup>Required</sup> <a name="BinlogTransactionCompression" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogTransactionCompression"></a>

```go
func BinlogTransactionCompression() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CompletionType`<sup>Required</sup> <a name="CompletionType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.completionType"></a>

```go
func CompletionType() *string
```

- *Type:* *string

---

##### `ConnectionMemoryChunkSize`<sup>Required</sup> <a name="ConnectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryChunkSize"></a>

```go
func ConnectionMemoryChunkSize() *f64
```

- *Type:* *f64

---

##### `ConnectionMemoryLimit`<sup>Required</sup> <a name="ConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryLimit"></a>

```go
func ConnectionMemoryLimit() *string
```

- *Type:* *string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectTimeout"></a>

```go
func ConnectTimeout() *f64
```

- *Type:* *f64

---

##### `CteMaxRecursionDepth`<sup>Required</sup> <a name="CteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.cteMaxRecursionDepth"></a>

```go
func CteMaxRecursionDepth() *string
```

- *Type:* *string

---

##### `DefaultAuthenticationPlugin`<sup>Required</sup> <a name="DefaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.defaultAuthenticationPlugin"></a>

```go
func DefaultAuthenticationPlugin() *string
```

- *Type:* *string

---

##### `ForeignKeyChecks`<sup>Required</sup> <a name="ForeignKeyChecks" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.foreignKeyChecks"></a>

```go
func ForeignKeyChecks() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `GeneratedRandomPasswordLength`<sup>Required</sup> <a name="GeneratedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.generatedRandomPasswordLength"></a>

```go
func GeneratedRandomPasswordLength() *f64
```

- *Type:* *f64

---

##### `GlobalConnectionMemoryLimit`<sup>Required</sup> <a name="GlobalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryLimit"></a>

```go
func GlobalConnectionMemoryLimit() *string
```

- *Type:* *string

---

##### `GlobalConnectionMemoryTracking`<sup>Required</sup> <a name="GlobalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryTracking"></a>

```go
func GlobalConnectionMemoryTracking() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `GroupReplicationConsistency`<sup>Required</sup> <a name="GroupReplicationConsistency" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.groupReplicationConsistency"></a>

```go
func GroupReplicationConsistency() *string
```

- *Type:* *string

---

##### `InformationSchemaStatsExpiry`<sup>Required</sup> <a name="InformationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.informationSchemaStatsExpiry"></a>

```go
func InformationSchemaStatsExpiry() *f64
```

- *Type:* *f64

---

##### `InnodbBufferPoolDumpPct`<sup>Required</sup> <a name="InnodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolDumpPct"></a>

```go
func InnodbBufferPoolDumpPct() *f64
```

- *Type:* *f64

---

##### `InnodbBufferPoolInstances`<sup>Required</sup> <a name="InnodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolInstances"></a>

```go
func InnodbBufferPoolInstances() *f64
```

- *Type:* *f64

---

##### `InnodbBufferPoolSize`<sup>Required</sup> <a name="InnodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolSize"></a>

```go
func InnodbBufferPoolSize() *string
```

- *Type:* *string

---

##### `InnodbDdlBufferSize`<sup>Required</sup> <a name="InnodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlBufferSize"></a>

```go
func InnodbDdlBufferSize() *string
```

- *Type:* *string

---

##### `InnodbDdlThreads`<sup>Required</sup> <a name="InnodbDdlThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlThreads"></a>

```go
func InnodbDdlThreads() *f64
```

- *Type:* *f64

---

##### `InnodbFtEnableStopword`<sup>Required</sup> <a name="InnodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtEnableStopword"></a>

```go
func InnodbFtEnableStopword() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InnodbFtMaxTokenSize`<sup>Required</sup> <a name="InnodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMaxTokenSize"></a>

```go
func InnodbFtMaxTokenSize() *f64
```

- *Type:* *f64

---

##### `InnodbFtMinTokenSize`<sup>Required</sup> <a name="InnodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMinTokenSize"></a>

```go
func InnodbFtMinTokenSize() *f64
```

- *Type:* *f64

---

##### `InnodbFtNumWordOptimize`<sup>Required</sup> <a name="InnodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtNumWordOptimize"></a>

```go
func InnodbFtNumWordOptimize() *f64
```

- *Type:* *f64

---

##### `InnodbFtResultCacheLimit`<sup>Required</sup> <a name="InnodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtResultCacheLimit"></a>

```go
func InnodbFtResultCacheLimit() *string
```

- *Type:* *string

---

##### `InnodbFtServerStopwordTable`<sup>Required</sup> <a name="InnodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtServerStopwordTable"></a>

```go
func InnodbFtServerStopwordTable() *string
```

- *Type:* *string

---

##### `InnodbLockWaitTimeout`<sup>Required</sup> <a name="InnodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLockWaitTimeout"></a>

```go
func InnodbLockWaitTimeout() *f64
```

- *Type:* *f64

---

##### `InnodbLogWriterThreads`<sup>Required</sup> <a name="InnodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLogWriterThreads"></a>

```go
func InnodbLogWriterThreads() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InnodbMaxPurgeLag`<sup>Required</sup> <a name="InnodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLag"></a>

```go
func InnodbMaxPurgeLag() *string
```

- *Type:* *string

---

##### `InnodbMaxPurgeLagDelay`<sup>Required</sup> <a name="InnodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLagDelay"></a>

```go
func InnodbMaxPurgeLagDelay() *f64
```

- *Type:* *f64

---

##### `InnodbStatsPersistentSamplePages`<sup>Required</sup> <a name="InnodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsPersistentSamplePages"></a>

```go
func InnodbStatsPersistentSamplePages() *string
```

- *Type:* *string

---

##### `InnodbStatsTransientSamplePages`<sup>Required</sup> <a name="InnodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsTransientSamplePages"></a>

```go
func InnodbStatsTransientSamplePages() *string
```

- *Type:* *string

---

##### `InteractiveTimeout`<sup>Required</sup> <a name="InteractiveTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.interactiveTimeout"></a>

```go
func InteractiveTimeout() *f64
```

- *Type:* *f64

---

##### `LocalInfile`<sup>Required</sup> <a name="LocalInfile" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.localInfile"></a>

```go
func LocalInfile() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MandatoryRoles`<sup>Required</sup> <a name="MandatoryRoles" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mandatoryRoles"></a>

```go
func MandatoryRoles() *string
```

- *Type:* *string

---

##### `MaxAllowedPacket`<sup>Required</sup> <a name="MaxAllowedPacket" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxAllowedPacket"></a>

```go
func MaxAllowedPacket() *f64
```

- *Type:* *f64

---

##### `MaxBinlogCacheSize`<sup>Required</sup> <a name="MaxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxBinlogCacheSize"></a>

```go
func MaxBinlogCacheSize() *string
```

- *Type:* *string

---

##### `MaxConnectErrors`<sup>Required</sup> <a name="MaxConnectErrors" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnectErrors"></a>

```go
func MaxConnectErrors() *string
```

- *Type:* *string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnections"></a>

```go
func MaxConnections() *f64
```

- *Type:* *f64

---

##### `MaxExecutionTime`<sup>Required</sup> <a name="MaxExecutionTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxExecutionTime"></a>

```go
func MaxExecutionTime() *string
```

- *Type:* *string

---

##### `MaxHeapTableSize`<sup>Required</sup> <a name="MaxHeapTableSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxHeapTableSize"></a>

```go
func MaxHeapTableSize() *string
```

- *Type:* *string

---

##### `MaxPreparedStmtCount`<sup>Required</sup> <a name="MaxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxPreparedStmtCount"></a>

```go
func MaxPreparedStmtCount() *f64
```

- *Type:* *f64

---

##### `MysqlFirewallMode`<sup>Required</sup> <a name="MysqlFirewallMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlFirewallMode"></a>

```go
func MysqlFirewallMode() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MysqlxConnectTimeout`<sup>Required</sup> <a name="MysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxConnectTimeout"></a>

```go
func MysqlxConnectTimeout() *f64
```

- *Type:* *f64

---

##### `MysqlxDeflateDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel"></a>

```go
func MysqlxDeflateDefaultCompressionLevel() *f64
```

- *Type:* *f64

---

##### `MysqlxDeflateMaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```go
func MysqlxDeflateMaxClientCompressionLevel() *f64
```

- *Type:* *f64

---

##### `MysqlxDocumentIdUniquePrefix`<sup>Required</sup> <a name="MysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix"></a>

```go
func MysqlxDocumentIdUniquePrefix() *f64
```

- *Type:* *f64

---

##### `MysqlxEnableHelloNotice`<sup>Required</sup> <a name="MysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxEnableHelloNotice"></a>

```go
func MysqlxEnableHelloNotice() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MysqlxIdleWorkerThreadTimeout`<sup>Required</sup> <a name="MysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout"></a>

```go
func MysqlxIdleWorkerThreadTimeout() *f64
```

- *Type:* *f64

---

##### `MysqlxInteractiveTimeout`<sup>Required</sup> <a name="MysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxInteractiveTimeout"></a>

```go
func MysqlxInteractiveTimeout() *f64
```

- *Type:* *f64

---

##### `MysqlxLz4DefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel"></a>

```go
func MysqlxLz4DefaultCompressionLevel() *f64
```

- *Type:* *f64

---

##### `MysqlxLz4MaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel"></a>

```go
func MysqlxLz4MaxClientCompressionLevel() *f64
```

- *Type:* *f64

---

##### `MysqlxMaxAllowedPacket`<sup>Required</sup> <a name="MysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMaxAllowedPacket"></a>

```go
func MysqlxMaxAllowedPacket() *f64
```

- *Type:* *f64

---

##### `MysqlxMinWorkerThreads`<sup>Required</sup> <a name="MysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMinWorkerThreads"></a>

```go
func MysqlxMinWorkerThreads() *f64
```

- *Type:* *f64

---

##### `MysqlxReadTimeout`<sup>Required</sup> <a name="MysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxReadTimeout"></a>

```go
func MysqlxReadTimeout() *f64
```

- *Type:* *f64

---

##### `MysqlxWaitTimeout`<sup>Required</sup> <a name="MysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWaitTimeout"></a>

```go
func MysqlxWaitTimeout() *f64
```

- *Type:* *f64

---

##### `MysqlxWriteTimeout`<sup>Required</sup> <a name="MysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWriteTimeout"></a>

```go
func MysqlxWriteTimeout() *f64
```

- *Type:* *f64

---

##### `MysqlxZstdDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel"></a>

```go
func MysqlxZstdDefaultCompressionLevel() *f64
```

- *Type:* *f64

---

##### `MysqlxZstdMaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel"></a>

```go
func MysqlxZstdMaxClientCompressionLevel() *f64
```

- *Type:* *f64

---

##### `MysqlZstdDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel"></a>

```go
func MysqlZstdDefaultCompressionLevel() *f64
```

- *Type:* *f64

---

##### `NetReadTimeout`<sup>Required</sup> <a name="NetReadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netReadTimeout"></a>

```go
func NetReadTimeout() *f64
```

- *Type:* *f64

---

##### `NetWriteTimeout`<sup>Required</sup> <a name="NetWriteTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netWriteTimeout"></a>

```go
func NetWriteTimeout() *f64
```

- *Type:* *f64

---

##### `ParserMaxMemSize`<sup>Required</sup> <a name="ParserMaxMemSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.parserMaxMemSize"></a>

```go
func ParserMaxMemSize() *string
```

- *Type:* *string

---

##### `QueryAllocBlockSize`<sup>Required</sup> <a name="QueryAllocBlockSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryAllocBlockSize"></a>

```go
func QueryAllocBlockSize() *string
```

- *Type:* *string

---

##### `QueryPreallocSize`<sup>Required</sup> <a name="QueryPreallocSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryPreallocSize"></a>

```go
func QueryPreallocSize() *string
```

- *Type:* *string

---

##### `RegexpTimeLimit`<sup>Required</sup> <a name="RegexpTimeLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.regexpTimeLimit"></a>

```go
func RegexpTimeLimit() *f64
```

- *Type:* *f64

---

##### `SortBufferSize`<sup>Required</sup> <a name="SortBufferSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sortBufferSize"></a>

```go
func SortBufferSize() *string
```

- *Type:* *string

---

##### `SqlMode`<sup>Required</sup> <a name="SqlMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlMode"></a>

```go
func SqlMode() *string
```

- *Type:* *string

---

##### `SqlRequirePrimaryKey`<sup>Required</sup> <a name="SqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlRequirePrimaryKey"></a>

```go
func SqlRequirePrimaryKey() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SqlWarnings`<sup>Required</sup> <a name="SqlWarnings" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlWarnings"></a>

```go
func SqlWarnings() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ThreadPoolDedicatedListeners`<sup>Required</sup> <a name="ThreadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolDedicatedListeners"></a>

```go
func ThreadPoolDedicatedListeners() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ThreadPoolMaxTransactionsLimit`<sup>Required</sup> <a name="ThreadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolMaxTransactionsLimit"></a>

```go
func ThreadPoolMaxTransactionsLimit() *f64
```

- *Type:* *f64

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `TmpTableSize`<sup>Required</sup> <a name="TmpTableSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.tmpTableSize"></a>

```go
func TmpTableSize() *string
```

- *Type:* *string

---

##### `TransactionIsolation`<sup>Required</sup> <a name="TransactionIsolation" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.transactionIsolation"></a>

```go
func TransactionIsolation() *string
```

- *Type:* *string

---

##### `WaitTimeout`<sup>Required</sup> <a name="WaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.waitTimeout"></a>

```go
func WaitTimeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlConfigurationsConfigurationsVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables">DataOciMysqlMysqlConfigurationsConfigurationsVariables</a>

---


### DataOciMysqlMysqlConfigurationsFilterList <a name="DataOciMysqlMysqlConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

dataocimysqlmysqlconfigurations.NewDataOciMysqlMysqlConfigurationsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlConfigurationsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciMysqlMysqlConfigurationsFilterOutputReference <a name="DataOciMysqlMysqlConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqlconfigurations"

dataocimysqlmysqlconfigurations.NewDataOciMysqlMysqlConfigurationsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlConfigurationsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



