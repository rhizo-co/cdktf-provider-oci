# `dataOciOpsiOpsiConfigurations` Submodule <a name="`dataOciOpsiOpsiConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOpsiConfigurations <a name="DataOciOpsiOpsiConfigurations" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations oci_opsi_opsi_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurations(scope Construct, id *string, config DataOciOpsiOpsiConfigurationsConfig) DataOciOpsiOpsiConfigurations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig">DataOciOpsiOpsiConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig">DataOciOpsiOpsiConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOpsiConfigType">ResetOpsiConfigType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetId"></a>

```go
func ResetId()
```

##### `ResetOpsiConfigType` <a name="ResetOpsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOpsiConfigType"></a>

```go
func ResetOpsiConfigType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiOpsiConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.DataOciOpsiOpsiConfigurations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.DataOciOpsiOpsiConfigurations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.DataOciOpsiOpsiConfigurations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.DataOciOpsiOpsiConfigurations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOpsiOpsiConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOpsiOpsiConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOpsiOpsiConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOpsiConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList">DataOciOpsiOpsiConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigurationsCollection">OpsiConfigurationsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigTypeInput">OpsiConfigTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.stateInput">StateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigType">OpsiConfigType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.state">State</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filter"></a>

```go
func Filter() DataOciOpsiOpsiConfigurationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList">DataOciOpsiOpsiConfigurationsFilterList</a>

---

##### `OpsiConfigurationsCollection`<sup>Required</sup> <a name="OpsiConfigurationsCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigurationsCollection"></a>

```go
func OpsiConfigurationsCollection() DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OpsiConfigTypeInput`<sup>Optional</sup> <a name="OpsiConfigTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigTypeInput"></a>

```go
func OpsiConfigTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.stateInput"></a>

```go
func StateInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OpsiConfigType`<sup>Required</sup> <a name="OpsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigType"></a>

```go
func OpsiConfigType() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.state"></a>

```go
func State() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOpsiConfigurationsConfig <a name="DataOciOpsiOpsiConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

&dataociopsiopsiconfigurations.DataOciOpsiOpsiConfigurationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	OpsiConfigType: *[]*string,
	State: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#compartment_id DataOciOpsiOpsiConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#display_name DataOciOpsiOpsiConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#id DataOciOpsiOpsiConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.opsiConfigType">OpsiConfigType</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#opsi_config_type DataOciOpsiOpsiConfigurations#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.state">State</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#state DataOciOpsiOpsiConfigurations#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#compartment_id DataOciOpsiOpsiConfigurations#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#display_name DataOciOpsiOpsiConfigurations#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#filter DataOciOpsiOpsiConfigurations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#id DataOciOpsiOpsiConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpsiConfigType`<sup>Optional</sup> <a name="OpsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.opsiConfigType"></a>

```go
OpsiConfigType *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#opsi_config_type DataOciOpsiOpsiConfigurations#opsi_config_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.state"></a>

```go
State *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#state DataOciOpsiOpsiConfigurations#state}.

---

### DataOciOpsiOpsiConfigurationsFilter <a name="DataOciOpsiOpsiConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

&dataociopsiopsiconfigurations.DataOciOpsiOpsiConfigurationsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#name DataOciOpsiOpsiConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#values DataOciOpsiOpsiConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#regex DataOciOpsiOpsiConfigurations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#name DataOciOpsiOpsiConfigurations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#values DataOciOpsiOpsiConfigurations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#regex DataOciOpsiOpsiConfigurations#regex}.

---

### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

&dataociopsiopsiconfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection {

}
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

&dataociopsiopsiconfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems {

}
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

&dataociopsiopsiconfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems {

}
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

&dataociopsiopsiconfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata {

}
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

&dataociopsiopsiconfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails {

}
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

&dataociopsiopsiconfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOpsiConfigurationsFilterList <a name="DataOciOpsiOpsiConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurationsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiOpsiConfigurationsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.get"></a>

```go
func Get(index *f64) DataOciOpsiOpsiConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOpsiOpsiConfigurationsFilterOutputReference <a name="DataOciOpsiOpsiConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurationsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiOpsiConfigurationsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.get"></a>

```go
func Get(index *f64) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.get"></a>

```go
func Get(index *f64) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.configItemType">ConfigItemType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.unitDetails">UnitDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.valueInputDetails">ValueInputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigItemType`<sup>Required</sup> <a name="ConfigItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.configItemType"></a>

```go
func ConfigItemType() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `UnitDetails`<sup>Required</sup> <a name="UnitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.unitDetails"></a>

```go
func UnitDetails() DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList</a>

---

##### `ValueInputDetails`<sup>Required</sup> <a name="ValueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.valueInputDetails"></a>

```go
func ValueInputDetails() DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.get"></a>

```go
func Get(index *f64) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.get"></a>

```go
func Get(index *f64) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType">AllowedValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue">MaxValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.minValue">MinValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues">PossibleValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValueType`<sup>Required</sup> <a name="AllowedValueType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType"></a>

```go
func AllowedValueType() *string
```

- *Type:* *string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue"></a>

```go
func MaxValue() *string
```

- *Type:* *string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.minValue"></a>

```go
func MinValue() *string
```

- *Type:* *string

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues"></a>

```go
func PossibleValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.applicableContexts">ApplicableContexts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.configItemType">ConfigItemType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicableContexts`<sup>Required</sup> <a name="ApplicableContexts" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.applicableContexts"></a>

```go
func ApplicableContexts() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigItemType`<sup>Required</sup> <a name="ConfigItemType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.configItemType"></a>

```go
func ConfigItemType() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.metadata"></a>

```go
func Metadata() DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemCustomStatus">ConfigItemCustomStatus</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemField">ConfigItemField</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItems">ConfigItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemsApplicableContext">ConfigItemsApplicableContext</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigField">OpsiConfigField</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigType">OpsiConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConfigItemCustomStatus`<sup>Required</sup> <a name="ConfigItemCustomStatus" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemCustomStatus"></a>

```go
func ConfigItemCustomStatus() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigItemField`<sup>Required</sup> <a name="ConfigItemField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemField"></a>

```go
func ConfigItemField() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigItems`<sup>Required</sup> <a name="ConfigItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItems"></a>

```go
func ConfigItems() DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList</a>

---

##### `ConfigItemsApplicableContext`<sup>Required</sup> <a name="ConfigItemsApplicableContext" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemsApplicableContext"></a>

```go
func ConfigItemsApplicableContext() *[]*string
```

- *Type:* *[]*string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `OpsiConfigField`<sup>Required</sup> <a name="OpsiConfigField" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigField"></a>

```go
func OpsiConfigField() *[]*string
```

- *Type:* *[]*string

---

##### `OpsiConfigType`<sup>Required</sup> <a name="OpsiConfigType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigType"></a>

```go
func OpsiConfigType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.get"></a>

```go
func Get(index *f64) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiopsiconfigurations"

dataociopsiopsiconfigurations.NewDataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection</a>

---



