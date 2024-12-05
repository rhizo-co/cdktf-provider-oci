# `dataOciPsqlDefaultConfigurations` Submodule <a name="`dataOciPsqlDefaultConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlDefaultConfigurations <a name="DataOciPsqlDefaultConfigurations" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations oci_psql_default_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.NewDataOciPsqlDefaultConfigurations(scope Construct, id *string, config DataOciPsqlDefaultConfigurationsConfig) DataOciPsqlDefaultConfigurations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig">DataOciPsqlDefaultConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig">DataOciPsqlDefaultConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetConfigurationId">ResetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetDbVersion">ResetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetShape">ResetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfigurationId` <a name="ResetConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetConfigurationId"></a>

```go
func ResetConfigurationId()
```

##### `ResetDbVersion` <a name="ResetDbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetDbVersion"></a>

```go
func ResetDbVersion()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetId"></a>

```go
func ResetId()
```

##### `ResetShape` <a name="ResetShape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetShape"></a>

```go
func ResetShape()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciPsqlDefaultConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.DataOciPsqlDefaultConfigurations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.DataOciPsqlDefaultConfigurations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.DataOciPsqlDefaultConfigurations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.DataOciPsqlDefaultConfigurations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciPsqlDefaultConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciPsqlDefaultConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciPsqlDefaultConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlDefaultConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.defaultConfigurationCollection">DefaultConfigurationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList">DataOciPsqlDefaultConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dbVersionInput">DbVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.configurationId">ConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DefaultConfigurationCollection`<sup>Required</sup> <a name="DefaultConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.defaultConfigurationCollection"></a>

```go
func DefaultConfigurationCollection() DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.filter"></a>

```go
func Filter() DataOciPsqlDefaultConfigurationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList">DataOciPsqlDefaultConfigurationsFilterList</a>

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.configurationIdInput"></a>

```go
func ConfigurationIdInput() *string
```

- *Type:* *string

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dbVersionInput"></a>

```go
func DbVersionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.configurationId"></a>

```go
func ConfigurationId() *string
```

- *Type:* *string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlDefaultConfigurationsConfig <a name="DataOciPsqlDefaultConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

&dataocipsqldefaultconfigurations.DataOciPsqlDefaultConfigurationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigurationId: *string,
	DbVersion: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	Shape: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.configurationId">ConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#configuration_id DataOciPsqlDefaultConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.dbVersion">DbVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#db_version DataOciPsqlDefaultConfigurations#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#display_name DataOciPsqlDefaultConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#id DataOciPsqlDefaultConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#shape DataOciPsqlDefaultConfigurations#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#state DataOciPsqlDefaultConfigurations#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationId`<sup>Optional</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.configurationId"></a>

```go
ConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#configuration_id DataOciPsqlDefaultConfigurations#configuration_id}.

---

##### `DbVersion`<sup>Optional</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.dbVersion"></a>

```go
DbVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#db_version DataOciPsqlDefaultConfigurations#db_version}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#display_name DataOciPsqlDefaultConfigurations#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#filter DataOciPsqlDefaultConfigurations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#id DataOciPsqlDefaultConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Shape`<sup>Optional</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#shape DataOciPsqlDefaultConfigurations#shape}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#state DataOciPsqlDefaultConfigurations#state}.

---

### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

&dataocipsqldefaultconfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection {

}
```


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

&dataocipsqldefaultconfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems {

}
```


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

&dataocipsqldefaultconfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails {

}
```


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

&dataocipsqldefaultconfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems {

}
```


### DataOciPsqlDefaultConfigurationsFilter <a name="DataOciPsqlDefaultConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

&dataocipsqldefaultconfigurations.DataOciPsqlDefaultConfigurationsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#name DataOciPsqlDefaultConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#values DataOciPsqlDefaultConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#regex DataOciPsqlDefaultConfigurations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#name DataOciPsqlDefaultConfigurations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#values DataOciPsqlDefaultConfigurations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#regex DataOciPsqlDefaultConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.NewDataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.get"></a>

```go
func Get(index *f64) DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.NewDataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.allowedValues">AllowedValues</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.configKey">ConfigKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.defaultConfigValue">DefaultConfigValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isOverridable">IsOverridable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isRestartRequired">IsRestartRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.allowedValues"></a>

```go
func AllowedValues() *string
```

- *Type:* *string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.configKey"></a>

```go
func ConfigKey() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DefaultConfigValue`<sup>Required</sup> <a name="DefaultConfigValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.defaultConfigValue"></a>

```go
func DefaultConfigValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsOverridable`<sup>Required</sup> <a name="IsOverridable" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isOverridable"></a>

```go
func IsOverridable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRestartRequired`<sup>Required</sup> <a name="IsRestartRequired" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isRestartRequired"></a>

```go
func IsRestartRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems</a>

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.NewDataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.get"></a>

```go
func Get(index *f64) DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.NewDataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.items"></a>

```go
func Items() DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails</a>

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.NewDataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.NewDataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.configurationDetails">ConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.instanceMemorySizeInGbs">InstanceMemorySizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.instanceOcpuCount">InstanceOcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.isFlexible">IsFlexible</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigurationDetails`<sup>Required</sup> <a name="ConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.configurationDetails"></a>

```go
func ConfigurationDetails() DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList</a>

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceMemorySizeInGbs`<sup>Required</sup> <a name="InstanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.instanceMemorySizeInGbs"></a>

```go
func InstanceMemorySizeInGbs() *f64
```

- *Type:* *f64

---

##### `InstanceOcpuCount`<sup>Required</sup> <a name="InstanceOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.instanceOcpuCount"></a>

```go
func InstanceOcpuCount() *f64
```

- *Type:* *f64

---

##### `IsFlexible`<sup>Required</sup> <a name="IsFlexible" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.isFlexible"></a>

```go
func IsFlexible() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems</a>

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.NewDataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.get"></a>

```go
func Get(index *f64) DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.NewDataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.items"></a>

```go
func Items() DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection</a>

---


### DataOciPsqlDefaultConfigurationsFilterList <a name="DataOciPsqlDefaultConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.NewDataOciPsqlDefaultConfigurationsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciPsqlDefaultConfigurationsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.get"></a>

```go
func Get(index *f64) DataOciPsqlDefaultConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciPsqlDefaultConfigurationsFilterOutputReference <a name="DataOciPsqlDefaultConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocipsqldefaultconfigurations"

dataocipsqldefaultconfigurations.NewDataOciPsqlDefaultConfigurationsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciPsqlDefaultConfigurationsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



